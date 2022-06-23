"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6198],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2196:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={},p="OpenWeather",u={unversionedId:"integrations/sources/openweather",id:"integrations/sources/openweather",title:"OpenWeather",description:"Overview",source:"@site/../docs/integrations/sources/openweather.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/openweather",permalink:"/integrations/sources/openweather",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/openweather.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"OneSignal",permalink:"/integrations/sources/onesignal"},next:{title:"Oracle Peoplesoft",permalink:"/integrations/sources/oracle-peoplesoft"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Rate limiting",id:"rate-limiting",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openweather"},"OpenWeather"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This source connector syncs data from the ",(0,i.kt)("a",{parentName:"p",href:"https://openweathermap.org/api/one-call-api"},"OpenWeather One Call API"),". This API allows to obtain current and weather data from a geolocation expressed in latitude and longitude."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This source currently has a single stream, ",(0,i.kt)("inlineCode",{parentName:"p"},"openweather_one_call"),". An example of the data outputted by this stream is available ",(0,i.kt)("a",{parentName:"p",href:"https://openweathermap.org/api/one-call-api#example"},"here"),"."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync - (append only)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An OpenWeather API key"),(0,i.kt)("li",{parentName:"ul"},"Latitude and longitude of the location for which you want to get weather data")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://openweathermap.org"},"OpenWeather")," to create a user account and obtain an API key. The ",(0,i.kt)("em",{parentName:"p"},"One Call API")," is available with the free plan."),(0,i.kt)("h2",{id:"rate-limiting"},"Rate limiting"),(0,i.kt)("p",null,"The free plan allows 60 calls per minute and 1,000,000 calls per month, you won't get beyond these limits with existing Airbyte's sync frequencies."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-06-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,i.kt)("td",{parentName:"tr",align:"left"},"No changes. Used connector to test publish workflow changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12397"},"12397")),(0,i.kt)("td",{parentName:"tr",align:"left"},"No changes. Used connector to test publish workflow changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7434"},"7434")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial release")))))}d.isMDXComponent=!0}}]);