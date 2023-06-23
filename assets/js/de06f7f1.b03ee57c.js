"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[36510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={},s="Project Structure",a={unversionedId:"kits/tractusx-edc/docs/kit/development-view/page03_project_structure",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/page03_project_structure",title:"Project Structure",description:"Issue Tracking",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/page03_project_structure.md",sourceDirName:"kits/tractusx-edc/docs/kit/development-view",slug:"/kits/tractusx-edc/docs/kit/development-view/page03_project_structure",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/page03_project_structure",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"Repository Structure",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/page02_repository_structure"},next:{title:"Coding Principles and Style Guide",permalink:"/docs-kits/kits/tractusx-edc/docs/development/coding-principles"}},c={},l=[{value:"Issue Tracking",id:"issue-tracking",level:2},{value:"Reporting Vulnerabilities",id:"reporting-vulnerabilities",level:2},{value:"Git Flow",id:"git-flow",level:2},{value:"Tooling",id:"tooling",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"project-structure"},"Project Structure"),(0,i.kt)("h2",{id:"issue-tracking"},"Issue Tracking"),(0,i.kt)("p",null,"Issues are maintained in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/issues"},"GitHub Issues"),"."),(0,i.kt)("h2",{id:"reporting-vulnerabilities"},"Reporting Vulnerabilities"),(0,i.kt)("p",null,"Vulnerabilities in the TractusX code base are best reported directly to the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.eclipse.org/security/"},"Eclipse Foundation"),"."),(0,i.kt)("h2",{id:"git-flow"},"Git Flow"),(0,i.kt)("p",null,"The TractusX EDC repository uses a Git Flow, with ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," as the development branch and ",(0,i.kt)("inlineCode",{parentName:"p"},"releases")," as the release branch.\nOther branches should follow the naming conventions of ",(0,i.kt)("inlineCode",{parentName:"p"},"feature/x")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix/x"),", though this is not strictly enforced."),(0,i.kt)("h2",{id:"tooling"},"Tooling"),(0,i.kt)("p",null,"We use Java 11 with Gradle for dependencies and builds.\nWe use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/diffplug/spotless"},"Spotless")," for code formatting.\nReleases are in the form of Docker containers and Helm charts."))}p.isMDXComponent=!0}}]);