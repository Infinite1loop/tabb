var e,n;"function"==typeof(e=globalThis.define)&&(n=e,e=null),function(n,t,r,i,o){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof l[i]&&l[i],u=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(e,t){if(!u[e]){if(!n[e]){var r="function"==typeof l[i]&&l[i];if(!t&&r)return r(e,!0);if(a)return a(e,!0);if(c&&"string"==typeof e)return c(e);var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}d.resolve=function(t){var r=n[e][1][t];return null!=r?r:t},d.cache={};var f=u[e]=new s.Module(e);n[e][0].call(f.exports,d,f,f.exports,this)}return u[e].exports;function d(e){var n=d.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=n,s.cache=u,s.parent=a,s.register=function(e,t){n[e]=[function(e,n){n.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return l[i]}}),l[i]=s;for(var f=0;f<t.length;f++)s(t[f]);if(r){var d=s(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd?e(function(){return d}):o&&(this[o]=d)}}({jmWet:[function(e,n,t){var r=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("turndown"),o=r.interopDefault(i);let l=new o.default;l.addRule("removeMarkdown",{filter:["script","style","react-partial"],replacement:function(e){return" "}}),l.addRule("cleanMarkdown",{filter:["a","button","iframe","form","input","svg","img"],replacement:function(e){return" "+e+" "}});let a=async(e,n,t)=>{if("convert-markdown"===e.type){try{let n=new DOMParser,r=n.parseFromString(e.rawHtml,"text/html"),i=l.turndown(r.body.outerHTML),o=[/(\*{1,2}|\_{1,2})(\S(.*?\S)?)\1/g,/(\~\~)(\S(.*?\S)?)\1/g,/\[(.*?)\](?:\((.*?)\))?/g,/^\s*[\*\-\+]\s+(.*)$/gm,/^#+\s*(.*?)\s*#*$/gm,/^>\s*(.*)$/gm,/^-{3,}$/gm,/`(.*)`/gm,/\|(.*)\|/gm,/(.*)\n={2,}/gm,/(.*)\n-{2,}/gm].reduce((e,n,t)=>[0,1,8,9,10].includes(t)?e.replace(n,"$2"):2===t?e.replace(n,"$1"):6===t?e.replace(n,""):e.replace(n,"$1"),i).replace(/[\r\n\f]+/g," ").replace(/[ \t]+/g," ");t(o)}catch(e){console.error("Error:",e)}return!0}};chrome.runtime.onMessage.addListener(a)},{turndown:"cCSz0","@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],cCSz0:[function(e,n,t){function r(e,n){return Array(n+1).join(e)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);var i,o,l=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function a(e){return f(e,l)}var u=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function c(e){return f(e,u)}var s=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function f(e,n){return n.indexOf(e.nodeName)>=0}function d(e,n){return e.getElementsByTagName&&n.some(function(n){return e.getElementsByTagName(n).length})}var p={};function m(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function h(e){for(var n in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[n])}function g(e,n,t){for(var r=0;r<e.length;r++){var i=e[r];if(function(e,n,t){var r=e.filter;if("string"==typeof r){if(r===n.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(n.nodeName.toLowerCase())>-1)return!0}else if("function"==typeof r){if(r.call(e,n,t))return!0}else throw TypeError("`filter` needs to be a string, array, or function")}(i,n,t))return i}}function y(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function v(e,n,t){return e&&e.parentNode===n||t(n)?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}p.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},p.lineBreak={filter:"br",replacement:function(e,n,t){return t.br+"\n"}},p.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,n,t){var i=Number(n.nodeName.charAt(1));if("setext"!==t.headingStyle||!(i<3))return"\n\n"+r("#",i)+" "+e+"\n\n";var o=r(1===i?"=":"-",e.length);return"\n\n"+e+"\n"+o+"\n\n"}},p.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},p.list={filter:["ul","ol"],replacement:function(e,n){var t=n.parentNode;return"LI"===t.nodeName&&t.lastElementChild===n?"\n"+e:"\n\n"+e+"\n\n"}},p.listItem={filter:"li",replacement:function(e,n,t){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=t.bulletListMarker+"   ",i=n.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),l=Array.prototype.indexOf.call(i.children,n);r=(o?Number(o)+l:l+1)+".  "}return r+e+(n.nextSibling&&!/\n$/.test(e)?"\n":"")}},p.indentedCodeBlock={filter:function(e,n){return"indented"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},p.fencedCodeBlock={filter:function(e,n){return"fenced"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){for(var i,o=((n.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],l=n.firstChild.textContent,a=t.fence.charAt(0),u=3,c=RegExp("^"+a+"{3,}","gm");i=c.exec(l);)i[0].length>=u&&(u=i[0].length+1);var s=r(a,u);return"\n\n"+s+o+"\n"+l.replace(/\n$/,"")+"\n"+s+"\n\n"}},p.horizontalRule={filter:"hr",replacement:function(e,n,t){return"\n\n"+t.hr+"\n\n"}},p.inlineLink={filter:function(e,n){return"inlined"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){var t=n.getAttribute("href"),r=m(n.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+t+r+")"}},p.referenceLink={filter:function(e,n){return"referenced"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n,t){var r,i,o=n.getAttribute("href"),l=m(n.getAttribute("title"));switch(l&&(l=' "'+l+'"'),t.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+l;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+l;break;default:var a=this.references.length+1;r="["+e+"]["+a+"]",i="["+a+"]: "+o+l}return this.references.push(i),r},references:[],append:function(e){var n="";return this.references.length&&(n="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),n}},p.emphasis={filter:["em","i"],replacement:function(e,n,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}},p.strong={filter:["strong","b"],replacement:function(e,n,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}},p.code={filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var n=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",r=e.match(/`+/gm)||[];-1!==r.indexOf(t);)t+="`";return t+n+e+n+t}},p.image={filter:"img",replacement:function(e,n){var t=m(n.getAttribute("alt")),r=n.getAttribute("src")||"",i=m(n.getAttribute("title"));return r?"!["+t+"]("+r+(i?' "'+i+'"':"")+")":""}},h.prototype={add:function(e,n){this.array.unshift(n)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){var n;return e.isBlank?this.blankRule:(n=g(this.array,e,this.options))||(n=g(this._keep,e,this.options))||(n=g(this._remove,e,this.options))?n:this.defaultRule},forEach:function(e){for(var n=0;n<this.array.length;n++)e(this.array[n],n)}};var b="undefined"!=typeof window?window:{},A=!function(){var e=b.DOMParser,n=!1;try{new e().parseFromString("","text/html")&&(n=!0)}catch(e){}return n}()?(o=function(){},function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(n){window.ActiveXObject&&(e=!0)}return e}()?o.prototype.parseFromString=function(e){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(e),n.close(),n}:o.prototype.parseFromString=function(e){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(e),n.close(),n},o):b.DOMParser;function E(e,n){var t;return function(e){var n=e.element,t=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(!(!n.firstChild||i(n))){for(var o=null,l=!1,a=null,u=v(null,n,i);u!==n;){if(3===u.nodeType||4===u.nodeType){var c=u.data.replace(/[ \r\n\t]+/g," ");if((!o||/ $/.test(o.data))&&!l&&" "===c[0]&&(c=c.substr(1)),!c){u=y(u);continue}u.data=c,o=u}else if(1===u.nodeType)t(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,l=!1):r(u)||i(u)?(o=null,l=!0):o&&(l=!1);else{u=y(u);continue}var s=v(a,u,i);a=u,u=s}o&&(o.data=o.data.replace(/ $/,""),o.data||y(o))}}({element:t="string"==typeof e?(i=i||new A).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):e.cloneNode(!0),isBlock:a,isVoid:c,isPre:n.preformattedCode?T:null}),t}function T(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function N(e,n){return e.isBlock=a(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=!c(e)&&!f(e,s)&&/^\s*$/i.test(e.textContent)&&!d(e,u)&&!d(e,s),e.flankingWhitespace=function(e,n){if(e.isBlock||n.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t,r={leading:(t=e.textContent.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/))[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]};return r.leadingAscii&&R("left",e,n)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&R("right",e,n)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}(e,n),e}function R(e,n,t){var r,i,o;return"left"===e?(r=n.previousSibling,i=/ $/):(r=n.nextSibling,i=/^ /),r&&(3===r.nodeType?o=i.test(r.nodeValue):t.preformattedCode&&"CODE"===r.nodeName?o=!1:1!==r.nodeType||a(r)||(o=i.test(r.textContent))),o}var O=Array.prototype.reduce,C=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function k(e){if(!(this instanceof k))return new k(e);this.options=function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}return e}({},{rules:p,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,n){return n.isBlock?"\n\n":""},keepReplacement:function(e,n){return n.isBlock?"\n\n"+n.outerHTML+"\n\n":n.outerHTML},defaultReplacement:function(e,n){return n.isBlock?"\n\n"+e+"\n\n":e}},e),this.rules=new h(this.options)}function S(e){var n=this;return O.call(e.childNodes,function(e,t){t=new N(t,n.options);var r="";return 3===t.nodeType?r=t.isCode?t.nodeValue:n.escape(t.nodeValue):1===t.nodeType&&(r=D.call(n,t)),x(e,r)},"")}function w(e){var n=this;return this.rules.forEach(function(t){"function"==typeof t.append&&(e=x(e,t.append(n.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function D(e){var n=this.rules.forNode(e),t=S.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(t=t.trim()),r.leading+n.replacement(t,e,this.options)+r.trailing}function x(e,n){var t=function(e){for(var n=e.length;n>0&&"\n"===e[n-1];)n--;return e.substring(0,n)}(e),r=n.replace(/^\n*/,""),i=Math.max(e.length-t.length,n.length-r.length);return t+"\n\n".substring(0,i)+r}k.prototype={turndown:function(e){if(!(null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))))throw TypeError(e+" is not a string, or an element/document/fragment node.");return""===e?"":w.call(this,S.call(this,new E(e,this.options)))},use:function(e){if(Array.isArray(e))for(var n=0;n<e.length;n++)this.use(e[n]);else if("function"==typeof e)e(this);else throw TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,n){return this.rules.add(e,n),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return C.reduce(function(e,n){return e.replace(n[0],n[1])},e)}},t.default=k},{"@parcel/transformer-js/src/esmodule-helpers.js":"hbR2Q"}],hbR2Q:[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})}),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},["jmWet"],"jmWet","parcelRequire9923"),globalThis.define=n;