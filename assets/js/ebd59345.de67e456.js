"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[32650],{92472:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>v,toc:()=>u});var n=i(87462),s=(i(67294),i(3905)),o=i(26389),r=i(94891),d=(i(75190),i(47507)),a=i(24310),c=i(63303),p=(i(75035),i(85162));const l={id:"post-discovery-endpoint",title:"Define the endpoint to BPN discovery services and the EDC discovery service.",description:"Define the endpoint to BPN discovery services and the EDC discovery service.",sidebar_label:"Define the endpoint to BPN discovery services and the EDC discovery service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Finder"],operationId:"PostDiscoveryEndpoint",requestBody:{description:"Create new endpoint for bpn discovery service / edc discovery service. The type is uniqued. This service is allowed to administrators only",content:{"application/json":{schema:{title:"DiscoveryEndpoint",required:["type","description","endpointAddress"],properties:{type:{type:"string",minLength:1,maxLength:200},description:{type:"string",minLength:1,maxLength:500},endpointAddress:{type:"string",minLength:1,maxLength:300},documentation:{type:"string",minLength:1,maxLength:500},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",description:"Service to discover BPN to a particular OEN",endpointAddress:"http://...",documentation:"http://.../swagger/index.html"}}}}},required:!0},responses:{201:{description:"Discovery Endpoint created successfully",content:{"application/json":{schema:{title:"DiscoveryEndpoint",required:["type","description","endpointAddress"],properties:{type:{type:"string",minLength:1,maxLength:200},description:{type:"string",minLength:1,maxLength:500},endpointAddress:{type:"string",minLength:1,maxLength:300},documentation:{type:"string",minLength:1,maxLength:500},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",description:"Service to discover BPN to a particular OEN",endpointAddress:"http://...",documentation:"http://.../swagger/index.html",resourceId:"ec6f407b-4296-418c-9e4e-fb739fe72a67"}}}}}}},description:"Define the endpoint to BPN discovery services and the EDC discovery service.",method:"post",path:"/api/administration/connectors/discovery",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:{type:"string",description:"string",endpointAddress:"string",documentation:"string",resourceId:"string"},info:{title:"Discovery Finder",description:"Discovery Finder to find endpoint of the BPN/EDC Discovery.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Define the endpoint to BPN discovery services and the EDC discovery service.",description:{type:"text/plain"},url:{path:["api","administration","connectors","discovery"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/Discovery Finder//discovery-finder",custom_edit_url:null},m=void 0,v={unversionedId:"kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint",id:"kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint",title:"Define the endpoint to BPN discovery services and the EDC discovery service.",description:"Define the endpoint to BPN discovery services and the EDC discovery service.",source:"@site/docs-kits/kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API Discovery Finder",slug:"/kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API Discovery Finder/post-discovery-endpoint",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"post-discovery-endpoint",title:"Define the endpoint to BPN discovery services and the EDC discovery service.",description:"Define the endpoint to BPN discovery services and the EDC discovery service.",sidebar_label:"Define the endpoint to BPN discovery services and the EDC discovery service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Finder"],operationId:"PostDiscoveryEndpoint",requestBody:{description:"Create new endpoint for bpn discovery service / edc discovery service. The type is uniqued. This service is allowed to administrators only",content:{"application/json":{schema:{title:"DiscoveryEndpoint",required:["type","description","endpointAddress"],properties:{type:{type:"string",minLength:1,maxLength:200},description:{type:"string",minLength:1,maxLength:500},endpointAddress:{type:"string",minLength:1,maxLength:300},documentation:{type:"string",minLength:1,maxLength:500},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",description:"Service to discover BPN to a particular OEN",endpointAddress:"http://...",documentation:"http://.../swagger/index.html"}}}}},required:!0},responses:{201:{description:"Discovery Endpoint created successfully",content:{"application/json":{schema:{title:"DiscoveryEndpoint",required:["type","description","endpointAddress"],properties:{type:{type:"string",minLength:1,maxLength:200},description:{type:"string",minLength:1,maxLength:500},endpointAddress:{type:"string",minLength:1,maxLength:300},documentation:{type:"string",minLength:1,maxLength:500},resourceId:{type:"string"}}},examples:{complete:{value:{type:"oen",description:"Service to discover BPN to a particular OEN",endpointAddress:"http://...",documentation:"http://.../swagger/index.html",resourceId:"ec6f407b-4296-418c-9e4e-fb739fe72a67"}}}}}}},description:"Define the endpoint to BPN discovery services and the EDC discovery service.",method:"post",path:"/api/administration/connectors/discovery",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:{type:"string",description:"string",endpointAddress:"string",documentation:"string",resourceId:"string"},info:{title:"Discovery Finder",description:"Discovery Finder to find endpoint of the BPN/EDC Discovery.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Define the endpoint to BPN discovery services and the EDC discovery service.",description:{type:"text/plain"},url:{path:["api","administration","connectors","discovery"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/Discovery Finder//discovery-finder",custom_edit_url:null},sidebar:"kits",previous:{title:"Find the endpoints to BPN discovery services and the EDC discovery service.",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API Discovery Finder/get-discovery-endpoints"},next:{title:"post list of bpns or an empty array to retrieve available company connector. (Authorization required - Roles: view_connectors)",permalink:"/docs-kits/next/kits/Digital Twin Kit/Software Development View/API EDC Discovery/post-list-of-bpns-or-an-empty-array-to-retrieve-available-company-connector-authorization-required-roles-view-connectors"}},y={},u=[{value:"Define the endpoint to BPN discovery services and the EDC discovery service.",id:"define-the-endpoint-to-bpn-discovery-services-and-the-edc-discovery-service",level:2}],h={toc:u};function g(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"define-the-endpoint-to-bpn-discovery-services-and-the-edc-discovery-service"},"Define the endpoint to BPN discovery services and the EDC discovery service."),(0,s.kt)("p",null,"Define the endpoint to BPN discovery services and the EDC discovery service."),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Create new endpoint for bpn discovery service / edc discovery service. The type is uniqued. This service is allowed to administrators only"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(a.Z,{collapsible:!1,name:"type",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"description",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 500 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"endpointAddress",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 300 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"documentation",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 500 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"resourceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Discovery Endpoint created successfully")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(a.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 500 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"endpointAddress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 300 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"documentation",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 500 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(a.Z,{collapsible:!1,name:"resourceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "type": "string",\n  "description": "string",\n  "endpointAddress": "string",\n  "documentation": "string",\n  "resourceId": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Complete",value:"Complete",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "type": "oen",\n  "description": "Service to discover BPN to a particular OEN",\n  "endpointAddress": "http://...",\n  "documentation": "http://.../swagger/index.html",\n  "resourceId": "ec6f407b-4296-418c-9e4e-fb739fe72a67"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);