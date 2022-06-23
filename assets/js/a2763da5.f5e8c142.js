"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1129],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return a?r.createElement(N,i(i({ref:e},d),{},{components:a})):r.createElement(N,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55937:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={},o="Amazon Seller Partner",m={unversionedId:"integrations/sources/amazon-seller-partner",id:"integrations/sources/amazon-seller-partner",title:"Amazon Seller Partner",description:"This page guides you through the process of setting up the Amazon Seller Partner source connector.",source:"@site/../docs/integrations/sources/amazon-seller-partner.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amazon-seller-partner",permalink:"/integrations/sources/amazon-seller-partner",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/amazon-seller-partner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon Ads",permalink:"/integrations/sources/amazon-ads"},next:{title:"Amazon SQS",permalink:"/integrations/sources/amazon-sqs"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Amazon Seller Partner",id:"step-1-set-up-amazon-seller-partner",level:2},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"amazon-seller-partner"},"Amazon Seller Partner"),(0,l.kt)("p",null,"This page guides you through the process of setting up the Amazon Seller Partner source connector."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"app_id"),(0,l.kt)("li",{parentName:"ul"},"lwa_app_id"),(0,l.kt)("li",{parentName:"ul"},"lwa_client_secret"),(0,l.kt)("li",{parentName:"ul"},"refresh_token"),(0,l.kt)("li",{parentName:"ul"},"aws_access_key"),(0,l.kt)("li",{parentName:"ul"},"aws_secret_key"),(0,l.kt)("li",{parentName:"ul"},"role_arn"),(0,l.kt)("li",{parentName:"ul"},"aws_environment"),(0,l.kt)("li",{parentName:"ul"},"region"),(0,l.kt)("li",{parentName:"ul"},"replication_start_date")),(0,l.kt)("h2",{id:"step-1-set-up-amazon-seller-partner"},"Step 1: Set up Amazon Seller Partner"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-your-application"},"Register")," Amazon Seller Partner application.\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html"},"Create")," IAM user."),(0,l.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account. "),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,l.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,l.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,l.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown and enter a name for this connector."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,l.kt)("li",{parentName:"ol"},"Log in and Authorize to the Amazon Seller Partner account."),(0,l.kt)("li",{parentName:"ol"},"Paste all other data to required fields using your IAM user."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Using developer application from Step 1, ",(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/self-authorization"},"generate")," refresh token. "),(0,l.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,l.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,l.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Amazon Seller Partner connector and select ",(0,l.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown. "),(0,l.kt)("li",{parentName:"ol"},"Paste all data to required fields using your IAM user and developer account."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,l.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,l.kt)("p",null,"The Amazon Seller Partner source connector supports the following ",(0,l.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Refresh"),(0,l.kt)("li",{parentName:"ul"},"Incremental")),(0,l.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"Information about rate limits you may find ",(0,l.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api"},"here"),"."),(0,l.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,l.kt)("p",null,"This source is capable of syncing the following tables and their data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/200740930"},"FBA Inventory Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110"},"FBA Orders Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100"},"FBA Shipments Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/200453300"},"FBA Replacements Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Open Listings Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports By Last Update")," ","(","incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Amazon-Fulfilled Shipments Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Merchant Listings Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference"},"Vendor Direct Fulfillment Shipping")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Vendor Inventory Health Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference"},"Orders")," ","(","incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Seller Feedback Report")," ","(","incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Alternate Purchase Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Item Comparison Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Market Basket Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Repeat Purchase Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Search Terms Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report"},"Browse tree report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups"},"Financial Event Groups")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents"},"Financial Events"))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object"))))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.22")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-06-15"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13633"},"#","13633")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix - handle start date for financial stream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.21")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13364"},"#","13364")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add financial streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.20")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13059"},"#","13059")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add replication end date to config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.19")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-05-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13119"},"#","13119")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add OAuth2.0 support")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.18")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-05-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12663"},"#","12663")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add GET_XML_BROWSE_TREE_DATA report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.17")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-05-19"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12946"},"#","12946")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add throttling exception managing in Orders streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.16")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12523"},"#","12523")),(0,l.kt)("td",{parentName:"tr",align:"left"},"allow to use IAM user arn or IAM role arn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.15")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9789"},"#","9789")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add stream FbaReplacementsReports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.14")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9621"},"#","9621")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.13")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9581"},"#","9581")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change createdSince parameter to dataStartTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.12")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9312"},"#","9312")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add all remaining brand analytics report streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.11")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9115"},"#","9115")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix reading only 100 orders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.10")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-31"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9236"},"#","9236")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix NoAuth deprecation warning")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.9")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9212"},"#","9212")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Normalize GET_SELLER_FEEDBACK_DATA header field names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.8")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8810"},"#","8810")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix GET_SELLER_FEEDBACK_DATA Date cursor field format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.7")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9002"},"#","9002")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Extract REPORTS_MAX_WAIT_SECONDS to configurable parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.6")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8179"},"#","8179")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.5")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"#","8425")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.4")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8021"},"#","8021")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added GET_SELLER_FEEDBACK_DATA report with incremental sync capability")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7828"},"#","7828")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Remove datetime format from all streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7752"},"#","7752")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change ",(0,l.kt)("inlineCode",{parentName:"td"},"check_connection")," function to use stream Orders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5248"},"#","5248")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Added extra stream support. Updated reports streams logics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-08-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4863"},"#","4863")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Rebuild source with airbyte-cdk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-23"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4288"},"#","4288")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Bugfix failing connection check"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-15"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4108"},"#","4108")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Fixed: Sync fails with timeout when create report is CANCELLED"))))))}k.isMDXComponent=!0}}]);