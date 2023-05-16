"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9074],{32819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),p=a(94891),r=(a(75190),a(47507)),n=a(24310),o=a(63303),m=(a(75035),a(85162));const c={id:"get-startup",title:"getStartup",description:"Performs a startup probe to determine whether the runtime has completed startup.",sidebar_label:"getStartup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a startup probe to determine whether the runtime has completed startup.",operationId:"getStartup",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},title:"Failure"},isHealthy:{type:"boolean",example:null}},title:"HealthCheckResult"}},isSystemHealthy:{type:"boolean",example:null}},title:"HealthStatus"}}}}}},tags:["Application Observability"],method:"get",path:"/check/startup",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Startup",description:{content:"Performs a startup probe to determine whether the runtime has completed startup.",type:"text/plain"},url:{path:["check","startup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},u=void 0,d={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-startup",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-startup",title:"getStartup",description:"Performs a startup probe to determine whether the runtime has completed startup.",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-startup.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-startup",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-startup",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-startup",title:"getStartup",description:"Performs a startup probe to determine whether the runtime has completed startup.",sidebar_label:"getStartup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a startup probe to determine whether the runtime has completed startup.",operationId:"getStartup",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},title:"Failure"},isHealthy:{type:"boolean",example:null}},title:"HealthCheckResult"}},isSystemHealthy:{type:"boolean",example:null}},title:"HealthStatus"}}}}}},tags:["Application Observability"],method:"get",path:"/check/startup",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Startup",description:{content:"Performs a startup probe to determine whether the runtime has completed startup.",type:"text/plain"},url:{path:["check","startup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getReadiness",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-readiness"},next:{title:"Introduction",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api"}},y={},h=[{value:"getStartup",id:"getstartup",level:2}],b={toc:h};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getstartup"},"getStartup"),(0,l.kt)("p",null,"Performs a startup probe to determine whether the runtime has completed startup."),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"componentResults"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(n.Z,{collapsible:!1,name:"component",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"failure"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!1,name:"failureDetail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"messages",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"})))),(0,l.kt)(n.Z,{collapsible:!1,name:"isHealthy",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(n.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);