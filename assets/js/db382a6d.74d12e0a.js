"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91310],{9988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>x});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),p=a(94891),r=a(75190),n=a(47507),m=a(24310),o=a(63303),c=(a(75035),a(85162));const d={id:"get-all-policies",title:"getAllPolicies",description:"Returns all policy definitions according to a query",sidebar_label:"getAllPolicies",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Returns all policy definitions according to a query",operationId:"getAllPolicies",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",example:null,properties:{"@type":{type:"string",enum:["SET","OFFER","CONTRACT"],example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},parentPermission:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null},uid:{type:"string",example:null}}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},permissions:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},duties:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},parentPermission:"circular()",target:{type:"string",example:null},uid:{type:"string",example:null}}}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},prohibitions:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},target:{type:"string",example:null}}}},required:["policy"]}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Policy"],method:"get",path:"/policydefinitions",info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Policies",description:{content:"Returns all policy definitions according to a query",type:"text/plain"},url:{path:["policydefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},y=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies",title:"getAllPolicies",description:"Returns all policy definitions according to a query",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-policies",title:"getAllPolicies",description:"Returns all policy definitions according to a query",sidebar_label:"getAllPolicies",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Returns all policy definitions according to a query",operationId:"getAllPolicies",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",example:null,properties:{"@type":{type:"string",enum:["SET","OFFER","CONTRACT"],example:null},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},parentPermission:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},duties:{type:"array",example:null,items:"circular()"},target:{type:"string",example:null},uid:{type:"string",example:null}}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},permissions:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},duties:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular()",constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},parentPermission:"circular()",target:{type:"string",example:null},uid:{type:"string",example:null}}}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},prohibitions:{type:"array",example:null,items:{type:"object",example:null,properties:{action:{type:"object",example:null,properties:{constraint:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]},includedIn:{type:"string",example:null},type:{type:"string",example:null}}},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{type:"object",discriminator:{propertyName:"edctype"},example:null,properties:{edctype:{type:"string",example:null}},required:["edctype"]}},target:{type:"string",example:null},uid:{type:"string",example:null}}}},target:{type:"string",example:null}}}},required:["policy"]}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Policy"],method:"get",path:"/policydefinitions",info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Policies",description:{content:"Returns all policy definitions according to a query",type:"text/plain"},url:{path:["policydefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},sidebar:"kits",previous:{title:"deletePolicy",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/delete-policy"},next:{title:"getPolicyDefinition",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition"}},g={},x=[{value:"getAllPolicies",id:"getallpolicies",level:2}],k={toc:x};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getallpolicies"},"getAllPolicies"),(0,l.kt)("admonition",{title:"deprecated",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,l.kt)("p",null,"Returns all policy definitions according to a query"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"filter",schema:{type:"string",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},mdxType:"ParamsItem"}),(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"sortField",schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"policy"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`SET`, `OFFER`, `CONTRACT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"extensibleProperties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,l.kt)(m.Z,{collapsible:!1,name:"inheritsFrom",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"obligations"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"consequence",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"parentPermission"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"duties",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"permissions"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"duties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"consequence",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"parentPermission",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"prohibitions"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"includedIn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"assignee",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"assigner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{collapsible:!1,name:"target",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);