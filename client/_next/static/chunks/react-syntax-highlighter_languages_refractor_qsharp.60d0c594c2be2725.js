"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8347],{34364:function(e){function n(e){!function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,function(e,r){return"(?:"+n[+r]+")"})}function r(e,r,t){return RegExp(n(e,r),t||"")}var t={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"},a=RegExp("\\b(?:"+(t.type+" "+t.other).trim().replace(/ /g,"|")+")\\b"),s=/\b[A-Za-z_]\w*\b/.source,i=n(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[s]),o={keyword:a,punctuation:/[<>()?,.:[\]]/},u=/"(?:\\.|[^\\"])*"/.source;e.languages.qsharp=e.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[u]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[i]),lookbehind:!0,inside:o},{pattern:r(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[i]),lookbehind:!0,inside:o}],keyword:a,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),e.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var l=function(e,n){for(var r=0;r<2;r++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}(n(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[u]),0);e.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[l]),greedy:!0,inside:{interpolation:{pattern:r(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[l]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:e.languages.qsharp}}},string:/[\s\S]+/}}})}(e),e.languages.qs=e.languages.qsharp}e.exports=n,n.displayName="qsharp",n.aliases=["qs"]}}]);