(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(1),c=a(7),i=a.n(c),s=a(9),h=a(2),o=a(3),j=a(5),b=a(4),u=function(){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Job"})]})})},l=function(t){var e=t.characterData.map((function(e,a){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.job}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(r.jsx)("tbody",{children:e})},O=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.characterData,a=t.removeCharacter;return Object(r.jsxs)("table",{children:[Object(r.jsx)(u,{}),Object(r.jsx)(l,{characterData:e,removeCharacter:a})]})}}]),a}(n.Component),d=a(8),m=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).initialState={name:"",job:""},t.handleChange=function(e){var a=e.target,r=a.name,n=a.value;t.setState(Object(d.a)({},r,n))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t.state=t.initialState,t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(r.jsx)("label",{htmlFor:"job",children:"Job"}),Object(r.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(r.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),v=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(s.a)(t.state.characters),[e])})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O,{characterData:this.state.characters,removeCharacter:this.removeCharacter}),Object(r.jsx)(m,{handleSubmit:this.handleSubmit})]})}}]),a}(n.Component);a(15);i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7de58ea5.chunk.js.map