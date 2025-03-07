ARG JDK_VERSION=19-slim-bullseye
ARG JDK_IMAGE=openjdk:${JDK_VERSION}
FROM ${JDK_IMAGE} AS sync-attempt

ARG DOCKER_BUILD_ARCH=amd64

# Install Docker to launch orchestrator images. Eventually should be replaced with Docker-java.
# See https://gitter.im/docker-java/docker-java?at=5f3eb87ba8c1780176603f4e for more information on why we are not currently using Docker-java
RUN apt-get update && apt-get install -y \
                          apt-transport-https \
                          ca-certificates \
                          curl \
                          gnupg-agent \
                          software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
# arch var used to detect architecture of container. Architecture should be spcified to get proper binaries from repo.
RUN arch=$(dpkg --print-architecture) && \
       add-apt-repository \
       "deb [arch=${arch}] https://download.docker.com/linux/debian \
       $(lsb_release -cs) stable"
RUN apt-get update && apt-get install -y docker-ce-cli jq

# Install kubectl for copying files to kube pods. Eventually should be replaced with a kube java client.
# See https://github.com/airbytehq/airbyte/issues/8643 for more information on why we are using kubectl for copying.
# The following commands were taken from https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management
RUN curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y kubectl

# Don't change this manually.  Bump version expects to make moves based on this string
ARG VERSION=0.39.42-alpha

ENV APPLICATION airbyte-container-orchestrator
ENV VERSION=${VERSION}
ENV AIRBYTE_ENTRYPOINT "/app/${APPLICATION}-${VERSION}/bin/${APPLICATION}"

WORKDIR /app

# Move orchestrator app
ADD bin/${APPLICATION}-${VERSION}.tar /app

# wait for upstream dependencies to become available before starting server
ENTRYPOINT ["/bin/bash", "-c", "/app/${APPLICATION}-${VERSION}/bin/${APPLICATION}"]
