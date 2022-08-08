import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useUnmount } from "react-use";
import { Subscription } from "rxjs";

import { Spinner } from "components";

import { useExperiment } from "hooks/services/Experiment";
import { useAuthService } from "packages/cloud/services/auth/AuthService";

import githubLogo from "./assets/github-logo.svg";
import googleLogo from "./assets/google-logo.svg";
import styles from "./OAuthLogin.module.scss";

const GitHubButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.github} onClick={onClick}>
      <img src={githubLogo} alt="" />
      <FormattedMessage id="login.oauth.github" tagName="span" />
    </button>
  );
};

const GoogleButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.google} onClick={onClick}>
      <img src={googleLogo} alt="" />
      <FormattedMessage id="login.oauth.google" tagName="span" />
    </button>
  );
};

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  switch (error) {
    // The following error codes are not really errors, thus we'll ignore them.
    case "auth/popup-closed-by-user":
    case "auth/user-cancelled":
      return null;
    case "auth/account-exists-with-different-credential":
      // Happens if a user requests and sets a password for an originally OAuth account.
      // From them on they can't login via OAuth anymore unless it's Google OAuth.
      return <FormattedMessage id="login.oauth.differentCredentialsError" />;
    default:
      return <FormattedMessage id="login.oauth.unknownError" values={{ error }} />;
  }
};

export const OAuthLogin: React.FC = () => {
  const { loginWithOAuth } = useAuthService();
  const stateSubscription = useRef<Subscription>();
  const [errorCode, setErrorCode] = useState<string>();
  const [isLoading, setLoading] = useState(false);

  const isGitHubLoginEnabled = useExperiment("authPage.oauth.github", false);
  const isGoogleLoginEnabled = useExperiment("authPage.oauth.google", false);

  const isAnyOauthEnabled = isGitHubLoginEnabled || isGoogleLoginEnabled;

  useUnmount(() => {
    stateSubscription.current?.unsubscribe();
  });

  const login = (provider: "google" | "github") => {
    setErrorCode(undefined);
    const state = loginWithOAuth(provider);
    stateSubscription.current = state.subscribe({
      next: (value) => {
        if (value === "loading") {
          setLoading(true);
        }
        if (value === "done") {
          setLoading(false);
        }
      },
      error: (error) => {
        if ("code" in error && typeof error.code === "string") {
          setErrorCode(error.code);
        }
      },
    });
  };

  if (!isAnyOauthEnabled) {
    return null;
  }

  return (
    <div>
      <div className={styles.separator}>
        <FormattedMessage id="login.oauth.or" />
      </div>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      <div className={styles.buttons}>
        {!isLoading && isGoogleLoginEnabled && <GoogleButton onClick={() => login("google")} />}
        {!isLoading && isGitHubLoginEnabled && <GitHubButton onClick={() => login("github")} />}
      </div>
      {errorCode && (
        <div className={styles.error}>
          <ErrorMessage error={errorCode} />
        </div>
      )}
    </div>
  );
};
