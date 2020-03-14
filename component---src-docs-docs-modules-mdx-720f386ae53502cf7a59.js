(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{1314:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return l}));n(17),n(4),n(3),n(1),n(11),n(14),n(22);var o=n(59),r=n(66);n(36);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/modules.mdx"}});var i={_frontmatter:a},c=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(c,s({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"modules"},"Modules"),Object(o.b)("hr",null),Object(o.b)("p",null,"Sometimes you need to use a type which is declared in other module. So, you need a mechanism of importing/exporting types from different modules. Hegel provides ECMAScript modules like syntax for this case."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-typescript"}),"// ./modules/a.js\nexport class A {}\nexport type B = {}\nexport default class Main {}\nexport const MY_OWN_CONST = 42;\n")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'// ./modules/b.js\nimport type Main, { A, B, MY_OWN_CONST } from "./b.js"\n\n// Error: Type "22" is incompatible with type "42"\nconst NEW_CONST: MY_OWN_CONST = 22;\n')),Object(o.b)("p",null,'As you can see, you can import type of values without actual value importing. It means that the same as other "type imports", this imports will be removed by compiler.'))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/modules.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-modules-mdx-720f386ae53502cf7a59.js.map