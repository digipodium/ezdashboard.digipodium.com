"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3318],{91575:function(e){function s(e){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,function(e,n){return"(?:"+s[+n]+")"})}function n(e,n,r){return RegExp(s(e,n),r||"")}function r(e,s){for(var n=0;n<s;n++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var t={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function a(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var o=a(t.typeDeclaration),i=RegExp(a(t.type+" "+t.typeDeclaration+" "+t.contextual+" "+t.other)),c=a(t.typeDeclaration+" "+t.contextual+" "+t.other),u=a(t.type+" "+t.typeDeclaration+" "+t.other),l=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),d=r(/\((?:[^()]|<<self>>)*\)/.source,2),p=/@?\b[A-Za-z_]\w*\b/.source,g=s(/<<0>>(?:\s*<<1>>)?/.source,[p,l]),b=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[c,g]),h=/\[\s*(?:,\s*)*\]/.source,f=s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[b,h]),y=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[l,d,h]),m=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[y]),k=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[m,b,h]),w={keyword:i,punctuation:/[<>()?,.:[\]]/},x=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,v=/"(?:\\.|[^\\"\r\n])*"/.source,_=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[_]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[v]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[p,k]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[p]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[o,g]),lookbehind:!0,inside:w},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\bwhere\s+)<<0>>/.source,[p]),lookbehind:!0},{pattern:n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:w},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[k,u,p]),inside:w}],keyword:i,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[p]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[p]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[d]),lookbehind:!0,alias:"class-name",inside:w},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[k,b]),inside:w,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[k]),lookbehind:!0,inside:w,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[p,l]),inside:{function:n(/^<<0>>/.source,[p]),generic:{pattern:RegExp(l),alias:"class-name",inside:w}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[o,g,p,k,i.source,d,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[g,d]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:i,"class-name":{pattern:RegExp(k),greedy:!0,inside:w},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var $=v+"|"+x,E=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[$]),B=r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),R=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,D=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[b,B]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[R,D]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[R]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[B]),inside:e.languages.csharp},"class-name":{pattern:RegExp(b),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var S=/:[^}\r\n]+/.source,z=r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),N=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[z,S]),j=r(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[$]),2),A=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[j,S]);function C(s,r){return{interpolation:{pattern:n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[r,S]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[N]),lookbehind:!0,greedy:!0,inside:C(N,z)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[A]),lookbehind:!0,greedy:!0,inside:C(A,j)}],char:{pattern:RegExp(x),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(e)}e.exports=s,s.displayName="csharp",s.aliases=["dotnet","cs"]}}]);