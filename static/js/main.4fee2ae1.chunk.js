(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(42)},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),c=(n(35),n(9)),i=n(15),s=n(11),p=n(10),d=n(12),u=n(61),h=n(63),m=n(62),g=n(59),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).drag=function(e){e.dataTransfer.setData("transfer",e.target.id)},n.notAllow=function(e){e.stopPropagation()},n.onClick=function(e){console.log("I am not done")},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,onDragOver:this.notAllow,onClick:this.onClick,style:this.props.style},this.props.children)}}]),t}(a.Component),y=n(16),E=n.n(y),b=n(25),v=n.n(b),O=(a.Component,function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer"),n=document.getElementById("dropDragZone"),a=document.getElementById(t),r=e.clientX,l=e.clientY;if("dropDragZone"!==a.parentElement.id){console.log("hereee");var o=a.cloneNode(!0);console.log(o instanceof HTMLElement),o.id=E()(),console.log(o),o.children[0].style.left=r+"px",o.children[0].style.top=l+"px",n.appendChild(o)}else{var c=window.getComputedStyle(document.getElementById("dropZone"),null),i=parseInt(c.getPropertyValue("height"),10);parseInt(c.getPropertyValue("width"),10)>=r&&r>=10&&(a.children[0].style.left=r+"px"),i>=l&&r>=10&&(a.children[0].style.top=l+"px")}},n.allowDrop=function(e){e.preventDefault()},n.onClick=function(e){console.log("I am done")},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,onDrop:this.drop,onDragOver:this.allowDrop,style:this.props.style,onClick:this.onClick},this.props.children)}}]),t}(a.Component));function w(e){return r.a.createElement(g.a,{id:"data"},e.children)}var j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={value:0,list:[]},n.element=r.a.createElement("svg",{height:"100",width:"100"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:"black","stroke-width":"3",fill:"red"}),"Sorry, your browser does not support inline SVG."," "),n.list1={one:r.a.createElement("svg",{width:"100",height:"100"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:"green",strokeWidth:"4",fill:"yellow"})),two:r.a.createElement("svg",{width:"100",height:"100"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:"green",strokeWidth:"4",fill:"red"}))},n.list2={name:"Demo2"},n.list3={name:"Demo3"},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.classes;var e=this.state.value;return r.a.createElement(u.a,{square:!0},r.a.createElement(h.a,{value:this.state.value,indicatorColor:"primary",textColor:"primary",onChange:this.handleChange,"aria-label":"tabs"},r.a.createElement(m.a,{label:"Tab1"}),r.a.createElement(m.a,{label:"Tab2"}),r.a.createElement(m.a,{label:"Tab3"})),0===e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{id:E()()},r.a.createElement(w,null,this.list1.one)),r.a.createElement(f,{id:E()()},r.a.createElement(w,null,this.list1.two))),1===e&&r.a.createElement(f,{id:E()()},r.a.createElement(w,null,this.list2.name)),2===e&&r.a.createElement(f,{id:E()()},r.a.createElement(w,null,this.list3.name)))}}]),t}(a.Component),k=(n(41),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={items:{}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{id:"dropZone"},r.a.createElement(f,{id:"dropDragZone"})),r.a.createElement(j,null))}}]),t}(a.Component));o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4fee2ae1.chunk.js.map