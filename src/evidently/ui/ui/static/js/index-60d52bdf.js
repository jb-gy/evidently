var R=Object.defineProperty;var O=(s,t,e)=>t in s?R(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var $=(s,t,e)=>(O(s,typeof t!="symbol"?t+"":t,e),e);import{c as C,j as n,i as j,G as _,F as A,I as L,S as F,M as p,B as P,D,T as b,C as M,A as N,a as B,u as V,d as v,r as U,z as k,b as z,e as H,R as J,f as W,g as G}from"./vendor-19847e6d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const q=C({shape:{borderRadius:0},palette:{primary:{light:"#ed5455",main:"#ed0400",dark:"#d40400",contrastText:"#fff"},secondary:{light:"#61a0ff",main:"#3c7fdd",dark:"#61a0ff",contrastText:"#000"}},typography:{button:{fontWeight:"bold"},fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),Q="modulepreload",Y=function(s){return"/"+s},S={},x=function(t,e,o){if(!e||e.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=Y(i),i in S)return;S[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!o)for(let w=r.length-1;w>=0;w--){const g=r[w];if(g.href===i&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Q,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((w,g)=>{c.addEventListener("load",w),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},K=({api:s})=>({loader:()=>s.getVersion()});class m{constructor(){$(this,"at",0);$(this,"ch","");$(this,"text","");$(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(t){throw{name:"SyntaxError",message:t,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(t){t!==this.ch&&this.error(`Expected '${t}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var t="";if(this.ch==="-"&&(t="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();if(this.ch===".")for(t+=".";this.next()&&this.ch>="0"&&this.ch<="9";)t+=this.ch;if(this.ch==="e"||this.ch==="E")for(t+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(t+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();return+t}string(){var t,e,o="",r;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),o;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(r=0,e=0;e<4&&(t=parseInt(this.next(),16),!!isFinite(t));e++)r=r*16+t;o+=String.fromCharCode(r)}else if(this.escapee[this.ch])o+=this.escapee[this.ch];else break;else o+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var t=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),t;for(;this.ch;){if(t.push(this.value()),this.white(),this.ch==="]")return this.check("]"),t;this.check(","),this.white()}}this.error("Bad array")}object(){var t,e={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),e;for(;this.ch;){if(t=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(e,t)&&this.error('Duplicate key "'+t+'"'),e[t]=this.value(),this.white(),this.ch==="}")return this.check("}"),e;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(t,e){let o;return this.text=t,this.at=0,this.ch=" ",o=this.value(),this.white(),this.ch&&this.error("Syntax error"),e!==void 0?function r(i,a){var l,f,c=i[a];if(c&&typeof c=="object")for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(f=r(c,l),f!==void 0?c[l]=f:delete c[l]);return e.call(i,a,c)}({"":o},""):o}}const X=s=>t=>{if(!t.ok&&t.status===s)throw t},d=X(401);class Z{constructor(t){$(this,"endpoint");this.endpoint=t}async getAdditionalGraphData(t,e,o){const r=await fetch(`${this.endpoint}/projects/${t}/${e}/graphs_data/${o}`);if(d(r),r.ok)return new m().parse(await r.text());throw Error(`${r.status}, ${r.statusText}`)}async getAdditionalWidgetData(t,e,o){const r=await fetch(`${this.endpoint}/projects/${t}/${e}/graphs_data/${o}`);if(d(r),r.ok)return new m().parse(await r.text());throw Error(`${r.status}, ${r.statusText}`)}async getDashboard(t,e){const o=await fetch(`${this.endpoint}/projects/${t}/${e}/data`);if(d(o),o.ok)return new m().parse(await o.text());throw Error(`${o.status}, ${o.statusText}`)}async getProjects(){const t=await fetch(`${this.endpoint}/projects`);if(d(t),t.ok){let e=new m().parse(await t.text());return console.log(e),e}throw Error(`${t.status}, ${t.statusText}`)}async getProjectDashboard(t,e,o,r){const i=new URLSearchParams;e&&i.append("timestamp_start",e),o&&i.append("timestamp_end",o);const a=await fetch(`${this.endpoint}/projects/${t}/dashboard?${i.toString()}`,{signal:r});if(d(a),a.ok)return new m().parse(await a.text());throw Error(`${a.status}, ${a.statusText}`)}async getReports(t){const e=await fetch(`${this.endpoint}/projects/${t}/reports`);if(d(e),e.ok)return new m().parse(await e.text());throw Error(`${e.status}, ${e.statusText}`)}async getTestSuites(t){const e=await fetch(`${this.endpoint}/projects/${t}/test_suites`);if(d(e),e.ok)return new m().parse(await e.text());throw Error(`${e.status}, ${e.statusText}`)}async getProjectInfo(t){const e=await fetch(`${this.endpoint}/projects/${t}/info`);if(d(e),e.ok)return new m().parse(await e.text());throw Error(`${e.status}, ${e.statusText}`)}async getVersion(){const t=await fetch(`${this.endpoint}/version`);if(d(t),t.ok)return await t.json();throw Error(`${t.status}, ${t.statusText}`)}async editProjectInfo(t){const e=await fetch(`${this.endpoint}/projects/${t.id}/info`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(d(e),!e.ok)throw Error(`${e.status}, ${e.statusText}`);return e}async reloadProject(t){const e=await fetch(`${this.endpoint}/projects/${t}/reload`);if(d(e),!e.ok)throw e;return e}async createProject(t){const e=new URLSearchParams;t.team_id&&e.append("team_id",t.team_id);const o=await fetch(`${this.endpoint}/projects?${e.toString()}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(d(o),!o.ok)throw Error(`${o.status}, ${o.statusText}`);return o.json()}async deleteProject(t){const e=await fetch(`${this.endpoint}/projects/${t}`,{method:"delete"});if(e.ok)return e;throw Error(`${e.status}, ${e.statusText}, ${await e.text()}`)}}const y=new Z("/api"),tt="/static/img/logo.png",{loader:et}=K({api:y}),st={path:"/",lazy:async()=>{const{HomeComponentTemplate:s,...t}=await x(()=>import("./index-0f24dedb.js"),["static/js/index-0f24dedb.js","static/js/vendor-19847e6d.js","static/js/createSvgIcon-e49313dc.js"]);return{Component:()=>n.jsx(s,{logoSrc:tt}),...t}},loader:et},rt=({api:s})=>({loader:({params:t})=>{const{projectId:e}=t;return j(e,"missing projectId"),s.getProjectInfo(e)}}),ot=s=>{if(s.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})};function I(s){return typeof s!=typeof new Date?(console.log(`not a date ${typeof s}: ${s}`),s):`${s.getFullYear()}-${(s.getMonth()+1).toString().padStart(2,"0")}-${s.getDate().toString().padStart(2,"0")}T${s.getHours().toString().padStart(2,"0")}:${s.getMinutes().toString().padStart(2,"0")}`}const h={FROM:"date_from",TO:"date_to"},it=s=>{let t=s.get(h.FROM),e=s.get(h.TO);return{date_from:t,date_to:e}},nt=({dataRanges:s})=>{const[t,e]=V(),{date_from:o,date_to:r}=it(t),i=v(o||s.minDate),a=v(r||s.maxDate);return{isCorrectTimeInterval:i.isValid()&&a.isValid()&&(i.isSame(a)||i.isBefore(a)),date_from:i,date_to:a,setSearchParams:e}},At=({dataRanges:s})=>{const{isCorrectTimeInterval:t,date_from:e,date_to:o,setSearchParams:r}=nt({dataRanges:s}),i=t?"":"incorrect time interval",a=l=>f=>{r(c=>(c.delete(l),f&&c.append(l,I(f.toDate())),c),{preventScrollReset:!0,replace:!0})};return n.jsxs(_,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",justifyItems:"center",children:[n.jsx(_,{item:!0,xs:12,md:2,children:n.jsxs(A,{fullWidth:!0,children:[n.jsx(L,{children:"Period"}),n.jsxs(F,{variant:"standard",defaultValue:"",onChange:l=>{const[f,c]=l.target.value.split(",");if(f===""){r(u=>(u.delete(h.FROM),u.delete(h.TO),u.append(h.FROM,I(s.minDate.toDate())),u.append(h.TO,I(s.maxDate.toDate())),u),{preventScrollReset:!0,replace:!0});return}const[w,g]=[Number(f),c],T=s.maxDate.subtract(w,g);r(u=>(u.delete(h.FROM),u.delete(h.TO),u.append(h.FROM,I(T.isBefore(s.minDate)?s.minDate.toDate():T.toDate())),u.append(h.TO,I(s.maxDate.toDate())),u),{preventScrollReset:!0,replace:!0})},children:[n.jsx(p,{value:"",children:n.jsx("em",{children:"None"})}),n.jsx(p,{value:"10,minutes",children:"Last 10 Minutes"}),n.jsx(p,{value:"30,minutes",children:"Last 30 Minutes"}),n.jsx(p,{value:"1,hours",children:"Last 1 Hours"}),n.jsx(p,{value:"2,hours",children:"Last 2 Hours"}),n.jsx(p,{value:"8,hours",children:"Last 8 Hours"}),n.jsx(p,{value:"24,hours",children:"Last 24 Hours"}),n.jsx(p,{value:"7,days",children:"Last 7 Days"}),n.jsx(p,{value:"14,days",children:"Last 14 Days"}),n.jsx(p,{value:"28,days",children:"Last 28 Days"}),n.jsx(p,{value:"60,days",children:"Last 60 Days"})]})]})}),n.jsx(_,{item:!0,children:n.jsxs(P,{display:"flex",alignItems:"center",gap:2,children:[n.jsx(D,{minDate:s.minDate,maxDate:s.maxDate&&o,slotProps:{textField:{variant:"standard"}},label:"From",value:e,onChange:a(h.FROM)}),n.jsx(P,{height:1,display:"flex",alignItems:"center",children:n.jsx(b,{children:" - "})}),n.jsx(D,{minDate:s.minDate&&e,maxDate:s.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:o,onChange:a(h.TO)})]})}),n.jsx(_,{item:!0,xs:12,children:n.jsx(M,{unmountOnExit:!0,in:!t,children:n.jsxs(N,{severity:"error",children:[n.jsx(B,{children:"Error"}),i]})})})]})},at=({api:s})=>({loader:({params:t,request:e})=>{j(t.projectId,"missing projectId");const{searchParams:o}=new URL(e.url);let r=o.get(h.FROM),i=o.get(h.TO);return r&&!v(r).isValid()&&(r=null),i&&!v(i).isValid()&&(i=null),s.getProjectDashboard(t.projectId,r,i)}}),{loader:ct}=at({api:y}),ht={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:s},{DashboardWidgets:t}]=await Promise.all([x(()=>import("./index-99b6ee9b.js"),["static/js/index-99b6ee9b.js","static/js/vendor-19847e6d.js"]),x(()=>import("./DashboardWidgets-d7f9eed1.js"),["static/js/DashboardWidgets-d7f9eed1.js","static/js/vendor-19847e6d.js","static/js/DashboardContent-b8b9b19d.js","static/js/createSvgIcon-e49313dc.js","static/js/Edit-e2579aae.js"])]);return{Component:()=>n.jsx(s,{Dashboard:({data:{widgets:e}})=>n.jsx(t,{widgets:e})})}},loader:ct},lt=({api:s})=>({loader:({params:t})=>(j(t.projectId,"missing projectId"),s.getReports(t.projectId)),action:async({params:t})=>(j(t.projectId,"missing projectId"),s.reloadProject(t.projectId))}),dt=({api:s})=>({loader:({params:t})=>(j(t.projectId,"missing projectId"),s.getTestSuites(t.projectId)),action:async({params:t})=>(j(t.projectId,"missing projectId"),s.reloadProject(t.projectId))}),ut=({api:s})=>({loader:({params:t})=>{const{projectId:e,snapshotId:o}=t;return j(e,"missing projectId"),j(o,"missing testSuiteId"),s.getDashboard(e,o)}}),{loader:pt}=ut({api:y}),E={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:s,...t}=await x(()=>import("./index-74fe9e3d.js"),["static/js/index-74fe9e3d.js","static/js/vendor-19847e6d.js","static/js/DashboardContent-b8b9b19d.js","static/js/createSvgIcon-e49313dc.js","static/js/Edit-e2579aae.js"]);return{Component:()=>n.jsx(s,{api:y}),...t}},loader:pt},{loader:ft,action:mt}=lt({api:y}),jt={id:"reports",path:"reports",lazy:async()=>{const{SnapshotTemplate:s,...t}=await x(()=>import("./index-3237c14e.js"),["static/js/index-3237c14e.js","static/js/vendor-19847e6d.js","static/js/index-b8eb733e.js","static/js/ContentCopy-405d885d.js","static/js/createSvgIcon-e49313dc.js","static/css/index2.css"]);return{...t,Component:()=>n.jsx(s,{type:"report"})}},loader:ft,action:mt,children:[E]},{loader:xt,action:yt}=dt({api:y}),wt={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotTemplate:s,...t}=await x(()=>import("./index-3237c14e.js"),["static/js/index-3237c14e.js","static/js/vendor-19847e6d.js","static/js/index-b8eb733e.js","static/js/ContentCopy-405d885d.js","static/js/createSvgIcon-e49313dc.js","static/css/index2.css"]);return{...t,Component:()=>n.jsx(s,{type:"test-suite"})}},loader:xt,action:yt,children:[E]},gt={path:"test_suites/*",loader:({request:s})=>U(s.url.replace("/test_suites","/test-suites"))},{loader:$t}=rt({api:y}),It=[{id:"dashboard",link:"."},{id:"reports",link:"reports"},{id:"test_suites",link:"test-suites",label:"Test suites"},{id:"comparisons",link:"comparisons",disabled:!0}],kt={path:"projects/:projectId",lazy:async()=>{const{ProjectTemplate:s,...t}=await x(()=>import("./index-6b652437.js"),["static/js/index-6b652437.js","static/js/vendor-19847e6d.js","static/js/ContentCopy-405d885d.js","static/js/createSvgIcon-e49313dc.js"]);return{Component:()=>n.jsx(s,{tabsConfig:It}),...t}},loader:$t,children:[ht,jt,wt,gt]},_t=k.object({action:k.literal("create-new-project")}),vt=k.object({action:k.literal("delete-project"),projectId:k.string().uuid()}),Pt=({api:s})=>({loader:()=>s.getProjects(),action:async({request:t})=>{ot(t);const e=await t.json(),o=_t.safeParse(e);if(o.success&&o.data.action==="create-new-project")return s.createProject(e);const r=vt.safeParse(e);return r.success&&r.data.action==="delete-project"?s.deleteProject(r.data.projectId):s.editProjectInfo(e)}}),{loader:Tt,action:Dt}=Pt({api:y}),St={index:!0,lazy:()=>x(()=>import("./index-e131f011.js"),["static/js/index-e131f011.js","static/js/vendor-19847e6d.js","static/js/Edit-e2579aae.js","static/js/createSvgIcon-e49313dc.js","static/js/index-b8eb733e.js"]),loader:Tt,action:Dt},bt={path:"*",Component:()=>n.jsx(P,{display:"flex",justifyContent:"center",children:n.jsx(b,{variant:"h4",children:"Page Not Found"})})},Et={...st,children:[St,kt,bt]},Rt=z([Et]);H.createRoot(document.getElementById("root")).render(n.jsx(J.StrictMode,{children:n.jsx(W,{theme:q,children:n.jsx(G,{router:Rt})})}));export{At as D};
