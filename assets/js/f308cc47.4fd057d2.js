"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Scylla",l={unversionedId:"integrations/destinations/scylla",id:"integrations/destinations/scylla",title:"Scylla",description:"Sync overview",source:"@site/../docs/02-integrations/02-destinations/scylla.md",sourceDirName:"02-integrations/02-destinations",slug:"/integrations/destinations/scylla",permalink:"/integrations/destinations/scylla",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/02-destinations/scylla.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/integrations/destinations/s3"},next:{title:"SFTP JSON",permalink:"/integrations/destinations/sftp-json"}},s={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"TODO: more info, screenshots?, etc...",id:"todo-more-info-screenshots-etc",level:6}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scylla"},"Scylla"),(0,r.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"The incoming airbyte data is structured in keyspaces and tables and is partitioned and replicated across different nodes\nin the cluster. This connector maps an incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," to a Scylla ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," to a Scylla",(0,r.kt)("inlineCode",{parentName:"p"},"keyspace"),".\nFields in the airbyte message become different columns in the Scylla tables. Each table will contain the following\ncolumns."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": A random uuid generated to be used as a partition key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was received from the data source."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json text representing the extracted data.")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured DynamoDB table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace will be used as part of the table name.")))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Scylla is highly performant and is designed to handle large amounts of data by using different nodes in the cluster in\norder to perform write operations. As long as you have enough nodes in your cluster the database can scale infinitely\nand handle any amount of data from the connector."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Driver compatibility: NA"),(0,r.kt)("li",{parentName:"ul"},"Configuration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Keyspace ","[default keyspace to use when writing data]"),(0,r.kt)("li",{parentName:"ul"},"Username ","[authentication username]"),(0,r.kt)("li",{parentName:"ul"},"Password ","[authentication password]"),(0,r.kt)("li",{parentName:"ul"},"Address ","[cluster address]"),(0,r.kt)("li",{parentName:"ul"},"Port ","[default: 9042]"),(0,r.kt)("li",{parentName:"ul"},"Replication ","[optional][default: 1]")))),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h6",{id:"todo-more-info-screenshots-etc"},"TODO: more info, screenshots?, etc..."))}p.isMDXComponent=!0}}]);