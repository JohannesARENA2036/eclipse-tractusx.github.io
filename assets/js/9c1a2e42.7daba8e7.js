"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[99900],{40025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),l=a(75190),o=a(47507),m=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"get-legal-forms",title:"Returns all legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Returns all legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier of the legal form according to ISO 20275."},name:{type:"string",description:"The name of legal form according to ISO 20275."},abbreviation:{type:"string",description:"The abbreviated name of the legal form, such as AG for German Aktiengesellschaft."}},description:"A legal form is a mandatory corporate legal framework by which companies can conduct business, charitable or other permissible activities."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns all legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",id:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",title:"Returns all legal forms",description:"Lists all currently known legal forms in a paginated result",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-legal-forms",title:"Returns all legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Returns all legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"The technical identifier of the legal form according to ISO 20275."},name:{type:"string",description:"The name of legal form according to ISO 20275."},abbreviation:{type:"string",description:"The abbreviated name of the legal form, such as AG for German Aktiengesellschaft."}},description:"A legal form is a mandatory corporate legal framework by which companies can conduct business, charitable or other permissible activities."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns all legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Create new Region",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/create-region"},next:{title:"Creates a new legal form",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/create-legal-form"}},f={},h=[{value:"Returns all legal forms",id:"returns-all-legal-forms",level:2}],y={toc:h};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"returns-all-legal-forms"},"Returns all legal forms"),(0,r.kt)("p",null,"Lists all currently known legal forms in a paginated result"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Page of existing legal forms, may be empty")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"content"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Collection of results in the page")),(0,r.kt)(m.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:"The technical identifier of the legal form according to ISO 20275.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"The name of legal form according to ISO 20275.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"abbreviation",required:!1,deprecated:void 0,schemaDescription:"The abbreviated name of the legal form, such as AG for German Aktiengesellschaft.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "technicalKey": "string",\n      "name": "string",\n      "abbreviation": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"On malformed request parameters")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);