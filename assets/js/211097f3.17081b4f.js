"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3481],{73757:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var s=i(87462),a=(i(67294),i(3905)),r=i(26389),n=i(94891),o=(i(75190),i(47507)),d=i(24310),c=i(63303),u=(i(75035),i(85162));const l={id:"create-identifier-status",title:"Create new identifier status",description:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Create new identifier status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierStatus",requestBody:{content:{"application/json":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}}},required:!0},responses:{200:{description:"New identifier status successfully created",content:{"*/*":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier status with specified technical key already exists"}},method:"post",path:"/api/catena/identifier-status",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",name:"string"},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Create new identifier status",description:{content:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["api","catena","identifier-status"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},h=void 0,p={unversionedId:"kits/Business Partner Kit/Software Development View/create-identifier-status",id:"kits/Business Partner Kit/Software Development View/create-identifier-status",title:"Create new identifier status",description:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",source:"@site/docs/kits/Business Partner Kit/Software Development View/create-identifier-status.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View",slug:"/kits/Business Partner Kit/Software Development View/create-identifier-status",permalink:"/docs/kits/Business Partner Kit/Software Development View/create-identifier-status",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-identifier-status",title:"Create new identifier status",description:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Create new identifier status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierStatus",requestBody:{content:{"application/json":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}}},required:!0},responses:{200:{description:"New identifier status successfully created",content:{"*/*":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"}},description:"Named type uniquely identified by its technical key"}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier status with specified technical key already exists"}},method:"post",path:"/api/catena/identifier-status",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",name:"string"},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Create new identifier status",description:{content:"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["api","catena","identifier-status"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Create new legal entity business partners",permalink:"/docs/kits/Business Partner Kit/Software Development View/create-business-partners"},next:{title:"Create new identifier type",permalink:"/docs/kits/Business Partner Kit/Software Development View/create-identifier-type"}},m={},f=[{value:"Create new identifier status",id:"create-new-identifier-status",level:2}],y={toc:f};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-new-identifier-status"},"Create new identifier status"),(0,a.kt)("p",null,"Create a new identifier status which can be referenced by business partner records. A status further distinguishes an identifier by adding current status information such as active or revoked.The actual name of the identifier status is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems."),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"New identifier status successfully created")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "technicalKey": "string",\n  "name": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(u.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"On malformed request parameters")),(0,a.kt)("div",null)),(0,a.kt)(u.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Identifier status with specified technical key already exists")),(0,a.kt)("div",null)))))}b.isMDXComponent=!0}}]);