"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54417],{53115:(e,E,t)=>{t.r(E),t.d(E,{assets:()=>A,contentTitle:()=>R,default:()=>d,frontMatter:()=>I,metadata:()=>N,toc:()=>l});var a=t(87462),T=(t(67294),t(3905)),s=t(26389),i=t(94891),r=(t(75190),t(47507)),o=t(24310),_=t(63303),O=(t(75035),t(85162));const I={id:"register-job-for-global-asset-id",title:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",description:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",sidebar_label:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",operationId:"registerJobForGlobalAssetId",requestBody:{content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"The requested job definition.",properties:{aspects:{type:"array",items:{type:"string"},maxItems:2147483647},bomLifecycle:{type:"string",description:"The lifecycle context in which the child part was assembled into the parent part.",enum:["asBuilt","asPlanned"]},callbackUrl:{type:"string",description:"Callback url to notify requestor when job processing is finished. There are two uri variable placeholders that can be used: id and state.",example:"https://hostname.com/callback?id={id}&state={state}"},collectAspects:{type:"boolean",description:"Flag to specify whether aspects should be requested and collected. Default is false."},depth:{type:"integer",format:"int32",description:"Max depth of the item graph returned. If no depth is set item graph with max depth is returned.",maximum:100,minimum:1},direction:{type:"string",default:"downward",description:"Item graph traversal direction.",enum:["upward","downward"]},globalAssetId:{type:"string",description:"Id of global asset.",example:"urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",maxLength:45,minLength:45,pattern:"^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"},lookupBPNs:{type:"boolean",description:"Flag to specify whether BPNs should be collected and resolved via the configured BPDM URL. Default is false."}},required:["globalAssetId"]}}},required:!0},responses:{201:{content:{"application/json":{examples:{complete:{value:{id:"6c311d29-5753-46d4-b32c-19b918ea93b0"}}},schema:{type:"object",additionalProperties:!1,properties:{id:{type:"string",format:"uuid",description:"Id of the job.",maxLength:36,minLength:36,pattern:"/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i"}}}}},description:"Returns id of registered job."},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Job registration failed."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:["profile email"]}],tags:["Item Relationship Service"],method:"post",path:"/irs/jobs",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{"profile email":""},tokenUrl:"https://localhost"}},type:"oauth2"}},jsonRequestBodyExample:{aspects:["string"],bomLifecycle:"asBuilt",callbackUrl:"https://hostname.com/callback?id={id}&state={state}",collectAspects:!0,depth:0,direction:"downward",globalAssetId:"urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",lookupBPNs:!0},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.0"},postman:{name:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",description:{content:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",type:"text/plain"},url:{path:["irs","jobs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},R=void 0,N={unversionedId:"kits/Data Chain Kit/Software Development View/Job Api/register-job-for-global-asset-id",id:"version-23.12/kits/Data Chain Kit/Software Development View/Job Api/register-job-for-global-asset-id",title:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",description:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Data Chain Kit/Software Development View/Job Api/register-job-for-global-asset-id.api.mdx",sourceDirName:"kits/Data Chain Kit/Software Development View/Job Api",slug:"/kits/Data Chain Kit/Software Development View/Job Api/register-job-for-global-asset-id",permalink:"/docs-kits/23.12/kits/Data Chain Kit/Software Development View/Job Api/register-job-for-global-asset-id",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"register-job-for-global-asset-id",title:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",description:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",sidebar_label:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",operationId:"registerJobForGlobalAssetId",requestBody:{content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"The requested job definition.",properties:{aspects:{type:"array",items:{type:"string"},maxItems:2147483647},bomLifecycle:{type:"string",description:"The lifecycle context in which the child part was assembled into the parent part.",enum:["asBuilt","asPlanned"]},callbackUrl:{type:"string",description:"Callback url to notify requestor when job processing is finished. There are two uri variable placeholders that can be used: id and state.",example:"https://hostname.com/callback?id={id}&state={state}"},collectAspects:{type:"boolean",description:"Flag to specify whether aspects should be requested and collected. Default is false."},depth:{type:"integer",format:"int32",description:"Max depth of the item graph returned. If no depth is set item graph with max depth is returned.",maximum:100,minimum:1},direction:{type:"string",default:"downward",description:"Item graph traversal direction.",enum:["upward","downward"]},globalAssetId:{type:"string",description:"Id of global asset.",example:"urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",maxLength:45,minLength:45,pattern:"^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"},lookupBPNs:{type:"boolean",description:"Flag to specify whether BPNs should be collected and resolved via the configured BPDM URL. Default is false."}},required:["globalAssetId"]}}},required:!0},responses:{201:{content:{"application/json":{examples:{complete:{value:{id:"6c311d29-5753-46d4-b32c-19b918ea93b0"}}},schema:{type:"object",additionalProperties:!1,properties:{id:{type:"string",format:"uuid",description:"Id of the job.",maxLength:36,minLength:36,pattern:"/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i"}}}}},description:"Returns id of registered job."},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Job registration failed."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:["profile email"]}],tags:["Item Relationship Service"],method:"post",path:"/irs/jobs",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{"profile email":""},tokenUrl:"https://localhost"}},type:"oauth2"}},jsonRequestBodyExample:{aspects:["string"],bomLifecycle:"asBuilt",callbackUrl:"https://hostname.com/callback?id={id}&state={state}",collectAspects:!0,depth:0,direction:"downward",globalAssetId:"urn:uuid:6c311d29-5753-46d4-b32c-19b918ea93b0",lookupBPNs:!0},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.0"},postman:{name:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",description:{content:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",type:"text/plain"},url:{path:["irs","jobs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Registers an IRS job to start an investigation if a given bpn is contained in a part chain of a given globalAssetId.",permalink:"/docs-kits/23.12/kits/Data Chain Kit/Software Development View/Job Api/register-bpn-investigation"},next:{title:"Registers an IRS order with an array of {globalAssetIds}. Each globalAssetId will be processed in an IRS Job, grouped in batches.",permalink:"/docs-kits/23.12/kits/Data Chain Kit/Software Development View/Job Api/register-order"}},A={},l=[{value:"Register an IRS job to retrieve an item graph for given {globalAssetId}.",id:"register-an-irs-job-to-retrieve-an-item-graph-for-given-globalassetid",level:2}],n={toc:l};function d(e){let{components:E,...t}=e;return(0,T.kt)("wrapper",(0,a.Z)({},n,t,{components:E,mdxType:"MDXLayout"}),(0,T.kt)("h2",{id:"register-an-irs-job-to-retrieve-an-item-graph-for-given-globalassetid"},"Register an IRS job to retrieve an item graph for given {globalAssetId}."),(0,T.kt)("p",null,"Register an IRS job to retrieve an item graph for given {globalAssetId}."),(0,T.kt)(i.Z,{mdxType:"MimeTabs"},(0,T.kt)(O.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,T.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,T.kt)("summary",{style:{textAlign:"left"}},(0,T.kt)("strong",null,"Request Body"),(0,T.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,T.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,T.kt)("ul",{style:{marginLeft:"1rem"}},(0,T.kt)(o.Z,{collapsible:!1,name:"aspects",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"bomLifecycle",required:!1,deprecated:void 0,schemaDescription:"The lifecycle context in which the child part was assembled into the parent part.",schemaName:"string",qualifierMessage:"**Possible values:** [`asBuilt`, `asPlanned`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"callbackUrl",required:!1,deprecated:void 0,schemaDescription:"Callback url to notify requestor when job processing is finished. There are two uri variable placeholders that can be used: id and state.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"collectAspects",required:!1,deprecated:void 0,schemaDescription:"Flag to specify whether aspects should be requested and collected. Default is false.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"depth",required:!1,deprecated:void 0,schemaDescription:"Max depth of the item graph returned. If no depth is set item graph with max depth is returned.",schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1` and `<= 100`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"direction",required:!1,deprecated:void 0,schemaDescription:"Item graph traversal direction.",schemaName:"string",qualifierMessage:"**Possible values:** [`upward`, `downward`]",defaultValue:"downward",mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"globalAssetId",required:!0,deprecated:void 0,schemaDescription:"Id of global asset.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 45 characters` and `<= 45 characters`, Value must match regular expression `^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"lookupBPNs",required:!1,deprecated:void 0,schemaDescription:"Flag to specify whether BPNs should be collected and resolved via the configured BPDM URL. Default is false.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,T.kt)("div",null,(0,T.kt)(s.Z,{mdxType:"ApiTabs"},(0,T.kt)(O.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,T.kt)("div",null,(0,T.kt)("p",null,"Returns id of registered job.")),(0,T.kt)("div",null,(0,T.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,T.kt)(O.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,T.kt)(_.Z,{mdxType:"SchemaTabs"},(0,T.kt)(O.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,T.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,T.kt)("summary",{style:{textAlign:"left"}},(0,T.kt)("strong",null,"Schema")),(0,T.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,T.kt)("ul",{style:{marginLeft:"1rem"}},(0,T.kt)(o.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"Id of the job.",schemaName:"uuid",qualifierMessage:"**Possible values:** `>= 36 characters` and `<= 36 characters`, Value must match regular expression `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,T.kt)(O.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n}',language:"json",mdxType:"ResponseSamples"})),(0,T.kt)(O.Z,{label:"Complete",value:"Complete",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "id": "6c311d29-5753-46d4-b32c-19b918ea93b0"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,T.kt)(O.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,T.kt)("div",null,(0,T.kt)("p",null,"Job registration failed.")),(0,T.kt)("div",null,(0,T.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,T.kt)(O.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,T.kt)(_.Z,{mdxType:"SchemaTabs"},(0,T.kt)(O.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,T.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,T.kt)("summary",{style:{textAlign:"left"}},(0,T.kt)("strong",null,"Schema")),(0,T.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,T.kt)("ul",{style:{marginLeft:"1rem"}},(0,T.kt)(o.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,T.kt)(O.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,T.kt)(O.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "Bad request",\n  "messages": [\n    "BadRequestException"\n  ],\n  "statusCode": "400 BAD_REQUEST"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,T.kt)(O.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,T.kt)("div",null,(0,T.kt)("p",null,"No valid authentication credentials.")),(0,T.kt)("div",null,(0,T.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,T.kt)(O.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,T.kt)(_.Z,{mdxType:"SchemaTabs"},(0,T.kt)(O.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,T.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,T.kt)("summary",{style:{textAlign:"left"}},(0,T.kt)("strong",null,"Schema")),(0,T.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,T.kt)("ul",{style:{marginLeft:"1rem"}},(0,T.kt)(o.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,T.kt)(O.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,T.kt)(O.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "Unauthorized",\n  "messages": [\n    "UnauthorizedException"\n  ],\n  "statusCode": "401 UNAUTHORIZED"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,T.kt)(O.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,T.kt)("div",null,(0,T.kt)("p",null,"Authorization refused by server.")),(0,T.kt)("div",null,(0,T.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,T.kt)(O.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,T.kt)(_.Z,{mdxType:"SchemaTabs"},(0,T.kt)(O.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,T.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,T.kt)("summary",{style:{textAlign:"left"}},(0,T.kt)("strong",null,"Schema")),(0,T.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,T.kt)("ul",{style:{marginLeft:"1rem"}},(0,T.kt)(o.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,T.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,T.kt)(O.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,T.kt)(O.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,T.kt)(r.Z,{responseExample:'{\n  "error": "Forbidden",\n  "messages": [\n    "ForbiddenException"\n  ],\n  "statusCode": "403 FORBIDDEN"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}d.isMDXComponent=!0}}]);