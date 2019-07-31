(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(169)},169:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"todoList",function(){return j});var r={};a.r(r),a.d(r,"addTodo",function(){return Ae}),a.d(r,"completeTodo",function(){return Me}),a.d(r,"uncompleteTodo",function(){return ze}),a.d(r,"deleteTodo",function(){return _e});var l,o,i=a(0),c=a(10),m=a(52),d=a(24),s=a(107),u=a(22),p=a(251),h=a(44),E=a(30),f=a(108),g=a(20),b=(a(109),a(110)),y=a(87),v=a(84),x=a(56),w=a(29),N=a(78);!function(e){e[e.ADD_TODO=0]="ADD_TODO",e[e.DELETE_TODO=1]="DELETE_TODO",e[e.COMPLETE_TODO=2]="COMPLETE_TODO",e[e.UNCOMPLETE_TODO=3]="UNCOMPLETE_TODO"}(l||(l={}));var O,C,j=(O=[],o={},Object(w.a)(o,l.ADD_TODO,function(e,t){return[].concat(Object(N.a)(e),[t.payload])}),Object(w.a)(o,l.COMPLETE_TODO,function(e,t){return e.map(function(e){return e.id===t.payload?Object(x.a)({},e,{completed:!0}):e})}),Object(w.a)(o,l.UNCOMPLETE_TODO,function(e,t){return e.map(function(e){return e.id===t.payload?Object(x.a)({},e,{completed:!1}):e})}),Object(w.a)(o,l.DELETE_TODO,function(e,t){return e.filter(function(e){return e.id!==t.payload})}),C=o,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return C.hasOwnProperty(t.type)?C[t.type](e,t):e}),F={key:"root",version:1,storage:f,blacklist:[]},T=(Object(b.createLogger)(),Object(E.a)()),B=Object(g.applyMiddleware)(v.a);var k=Object(y.a)(F,Object(g.combineReducers)(Object(x.a)({},n))),I=a(214),L=a(121),S=a(213),D=Object(L.a)({palette:{primary:{light:"#e5e5e5",main:"#727272",dark:"#363839",contrastText:"#fff"},secondary:{light:"#ff5e50",main:"#e41e26",dark:"#a90000",contrastText:"#fff"}}});var P=function(e){return function(t){return i.createElement(S.a,{theme:D},i.createElement(I.a,null),i.createElement(e,t))}},A=a(241),M=a(21),z=a(249),_=a(216),W=a(218),R=a(220),G=a(219),H=Object(A.a)({card:{width:"70%",height:"70%",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"},container:{width:"60%",height:"80%",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"},bottomBorder:{textAlign:"left",width:"100%",borderBottom:"3px solid black",marginBottom:20},buttonForm:{width:"100%",height:"50%",display:"flex",flexFlow:"column",justifyContent:"space-around"},buttonSize:{width:"100%",height:"30%"},buttonStyle:{fontSize:20,fontWeight:"bold",width:"100%",height:"100%"}}),U=Object(z.a)(function(e){return{root:{color:e.palette.getContrastText(G.a[700]),backgroundColor:G.a[700],"&:hover":{backgroundColor:G.a[900]}}}})(R.a),J=function(e){var t=H();return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.container},i.createElement("div",{className:t.bottomBorder},i.createElement("h1",null,"\uc544\uc774\ub514 \ucc3e\uae30")),i.createElement("div",{className:t.buttonForm},i.createElement(M.a,{to:"phoneFindId",className:t.buttonSize},i.createElement(U,{className:t.buttonStyle,fullWidth:!0,size:"large",variant:"contained",color:"primary"},"\ud734\ub300\uc804\ud654\ub85c \ucc3e\uae30")),i.createElement(M.a,{to:"emailFindId",className:t.buttonSize},i.createElement(U,{className:t.buttonStyle,fullWidth:!0,size:"large",variant:"contained",color:"primary"},"\uc774\uba54\uc77c\ub85c \ucc3e\uae30")))))},K=a(243),Y=Object(A.a)({card:{height:"60%",width:"60%",display:"flex",justifyContent:"center",alignItems:"center"},findForm:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",width:"60%",height:"80%"},buttonStyle:{"&:hover":{backgroundColor:"gray"}},inputForm:{width:"100%",height:"60%",display:"flex",flexFlow:"column",justifyContent:"flex-end",alignItems:"center",paddingRight:10},inputBoxGrid:{height:"50%",width:"90%",display:"grid",gridTemplateColumns:"2fr 1fr"},inputBox:{height:"60%",width:"100%",display:"flex",flexFlow:"flex-start",justifyContent:"center",alignItems:"center"},buttonForm:{width:"100%",display:"flex",height:"100%",alignItems:"center"},sendButton:{textAlign:"center",height:"30%",width:"100%"},inputStyle:{width:"100%"},bottomBorder:{textAlign:"left",width:"100%",borderBottom:"3px solid black",marginBottom:20}}),q=function(e){var t=Y();return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.findForm},i.createElement("div",{className:t.bottomBorder},i.createElement("h1",null,"\uc774\uba54\uc77c\ub85c \ucc3e\uae30")),i.createElement("div",{className:t.inputBox},i.createElement("div",{className:t.inputBoxGrid},i.createElement("div",{className:t.inputForm},i.createElement(K.a,{className:t.inputStyle,label:"\uc774\ub984"}),i.createElement(K.a,{className:t.inputStyle,label:"\uc774\uba54\uc77c \uc8fc\uc18c"})),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.sendButton,variant:"contained",color:"primary"},"\uc778\uc99d\ubc88\ud638 \uc804\uc1a1"))))))},Q=Object(A.a)({card:{height:"60%",width:"60%",display:"flex",justifyContent:"center",alignItems:"center"},findForm:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",width:"60%",height:"60%"},buttonStyle:{"&:hover":{backgroundColor:"gray"}},inputForm:{width:"100%",height:"60%",display:"flex",flexFlow:"column",justifyContent:"flex-end",alignItems:"flex-end",paddingRight:10},inputBoxGrid:{height:"50%",width:"90%",display:"grid",gridTemplateColumns:"2fr 1fr"},inputBox:{height:"60%",width:"100%",display:"flex",flexFlow:"flex-start",justifyContent:"center",alignItems:"center"},buttonForm:{width:"100%",display:"flex",height:"100%",alignItems:"center"},sendButton:{textAlign:"center",height:"30%",width:"100%"},inputStyle:{width:"100%"},bottomBorder:{textAlign:"left",width:"100%",borderBottom:"3px solid black",marginBottom:20}}),V=function(e){var t=Q();return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.findForm},i.createElement("div",{className:t.bottomBorder},i.createElement("h1",null,"\uc804\ud654\ubc88\ud638\ub85c \ucc3e\uae30")),i.createElement("div",{className:t.inputBox},i.createElement("div",{className:t.inputBoxGrid},i.createElement("div",{className:t.inputForm},i.createElement(K.a,{className:t.inputStyle,label:"\uc774\ub984"}),i.createElement(K.a,{className:t.inputStyle,label:"\uc804\ud654\ubc88\ud638"})),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.sendButton,variant:"contained",color:"primary"},"\uc778\uc99d\ubc88\ud638 \uc804\uc1a1"))))))},X=Object(A.a)({card:{height:"50%",width:"50%",display:"flex",justifyContent:"center",alignItems:"center"},container:{width:"60%",height:"60%",display:"flex",flexFlow:"column"},bottomBorder:{textAlign:"left",width:"100%",borderBottom:"3px solid black",marginBottom:20},buttonSize:{width:"100%"}}),Z=function(e){var t=X();return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.container},i.createElement("div",{className:t.bottomBorder},i.createElement("h1",null,"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30")),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}),i.createElement(M.a,{to:"choiceFindPW",className:t.buttonSize},i.createElement(R.a,{variant:"contained",color:"primary",size:"large",fullWidth:!0}," \ub2e4\uc74c"))))},$=a(222),ee=a(250),te=a(224),ae=a(244),ne=Object(A.a)({card:{height:"50%",width:"60%",display:"flex",justifyContent:"center",alignItems:"center"},radioGroup:{height:"60%",width:"80%",display:"flex",flexFlow:"column",justifyContent:"center",alignItems:"flex-start"},formGroup:{width:"100%"},inputForm:{width:"100%",height:"60%",display:"flex",flexFlow:"column",justifyContent:"flex-end",alignItems:"flex-end",paddingRight:10},inputBox:{height:"40%",width:"80%",display:"flex",flexFlow:"flex-start",justifyContent:"space-between",alignItems:"flex-end"},buttonForm:{width:"40%",display:"flex",height:"100%",alignItems:"center"},sendButton:{textAlign:"center",height:"15%",width:"100%"},inputStyle:{width:"70%"}}),re=function(e){var t=ne(),a=i.useState(""),n=Object(u.a)(a,2),r=n[0],l=n[1],o=i.createElement("div",{className:t.inputBox},i.createElement("div",{className:t.inputForm},i.createElement(K.a,{className:t.inputStyle,label:"\uc774\ub984"}),i.createElement(K.a,{className:t.inputStyle,label:"\uc774\uba54\uc77c"})),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.sendButton,variant:"contained",color:"primary"},"\uc778\uc99d\ubc88\ud638 \uc804\uc1a1"))),c=i.createElement("div",{className:t.inputBox},i.createElement("div",{className:t.inputForm},i.createElement(K.a,{className:t.inputStyle,label:"\uc774\ub984"}),i.createElement(K.a,{className:t.inputStyle,label:"\uc804\ud654\ubc88\ud638"})),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.sendButton,variant:"contained",color:"primary"},"\uc778\uc99d\ubc88\ud638 \uc804\uc1a1")));return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.radioGroup},i.createElement($.a,{className:t.formGroup},i.createElement(ee.a,{onChange:function(e){l(e.target.value)}},i.createElement("div",null),i.createElement(te.a,{value:"phone",control:i.createElement(ae.a,{color:"primary"}),labelPlacement:"end",label:"\ud734\ub300\uc804\ud654\ub85c \ucc3e\uae30"}),"phone"===r?c:i.createElement("div",null),i.createElement(te.a,{value:"email",control:i.createElement(ae.a,{color:"primary"}),labelPlacement:"end",label:"\uc774\uba54\uc77c\ub85c \ucc3e\uae30"}),"email"===r?o:i.createElement("div",null)))))},le=a(116),oe=a.n(le),ie=Object(A.a)({root:{height:"100%",minHeight:"100%",textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},loginBox:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},loginForm:{height:"100%",display:"flex",flexFlow:"column",justifyContent:"space-around"},card:{maxWidth:500,padding:30},inputForm:{height:"30%",display:"flex",flexFlow:"column",paddingBottom:30},buttonForm:{width:360,display:"flex",flexFlow:"row",justifyContent:"space-between",alignContent:"stretch",paddingTop:10},buttonStyle:{minWidth:90}}),ce=Object(z.a)(function(e){return{root:{color:e.palette.getContrastText(G.a[700]),backgroundColor:G.a[700],"&:hover":{backgroundColor:G.a[900]}}}})(R.a),me=Object(z.a)({root:{"& label.Mui-focused":{color:"green"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"green"}}}})(K.a),de=function(e){var t=ie(),a=i.useState(""),n=Object(u.a)(a,2),r=n[0],l=n[1],o=i.useState(""),c=Object(u.a)(o,2),m=c[0],d=c[1],s=i.useRef(),p=i.useRef();function h(e){var t=e.target.value;"id"===e.target.name?l(t):d(t),console.log("LoginPage-HandleChange-ID : "+JSON.stringify(r)),console.log("LoginPage-HandleChange-PW : "+JSON.stringify(m))}return i.createElement("div",{className:t.root},i.createElement("div",{className:t.loginBox},i.createElement(_.a,{className:t.card},i.createElement("h1",null,"LOGIN"),i.createElement(W.a,null,i.createElement("div",{className:t.loginForm},i.createElement("div",{className:t.inputForm},i.createElement(me,{ref:s,name:"id",id:"custom-css-standard-input",label:"ID",onChange:h}),i.createElement(me,{ref:p,name:"pw",id:"custom-css-standard-input",label:"Password",type:"password",onChange:h})),i.createElement(ce,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){oe.a.get("http://localhost:3000/Login",{params:{id:r,pw:m}}).then(function(e){console.log(e)})}},"\ub85c\uadf8\uc778"),i.createElement("div",{className:t.buttonForm},i.createElement(M.a,{to:"findId"},i.createElement(R.a,{className:t.buttonStyle,variant:"contained",color:"primary"},"\uc544\uc774\ub514 \ucc3e\uae30")),i.createElement(M.a,{to:"findPassword"},i.createElement(R.a,{className:t.buttonStyle,variant:"contained",color:"primary"},"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30")),i.createElement(M.a,{to:"signUp"},i.createElement(R.a,{className:t.buttonStyle,variant:"contained",color:"primary"},"\ud68c\uc6d0\uac00\uc785"))))))))},se=a(248),ue=a(242),pe=a(171),he=a(117),Ee=a.n(he),fe=Object(pe.a)({card:{maxHeight:"100%",height:"90%",width:"60%",textAlign:"center"},cardContent:{maxHeight:"100%",height:"100%",width:"80%",display:"inline-block"},gridContainer:{display:"grid"},input4:{marginTop:30,display:"flex",justifyContent:"center",alignItems:"center"},button:{display:"grid"},inputBox:{marginTop:5,width:"100%",height:"100%"},formControl:{width:"100%",height:"30%"},buttonFormControl:{width:"100%",height:"30%",display:"grid",gridTemplateColumns:"5fr 1fr ",gridGap:"10px"},phoneFormControl:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"5fr 1fr ",gridGap:"10px"},buttonForm:{display:"flex",flexFlow:"flex-start",alignItems:"center"},bottomBorder:{textAlign:"left",width:"100%",borderBottom:"3px solid gray",marginBottom:20,color:"gray"},buttons:{height:"50%"},input4Button:{width:"30%",height:"50%",display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"5px"},textMask:{width:"100%",height:"100%"}}),ge=function(e){var t=fe();return i.createElement(_.a,{className:t.card},i.createElement(W.a,{className:t.cardContent},i.createElement("div",{className:t.bottomBorder},i.createElement("h1",null,"\ud68c\uc6d0\uac00\uc785")),i.createElement("div",{className:t.gridContainer},i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.formControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\uc544\uc774\ub514 *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.formControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\ube44\ubc00\ubc88\ud638 *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.formControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\ube44\ubc00\ubc88\ud638 \ud655\uc778 *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.formControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\uc774\ub984 *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.formControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\uad6c\ubd84 *"),i.createElement(ue.a,{native:!0,name:"age"},i.createElement("option",{value:""},"\uc120\ud0dd\ud558\uc138\uc694."),i.createElement("option",{value:10},"Ten"),i.createElement("option",{value:20},"Twenty"),i.createElement("option",{value:30},"Thirty")))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.phoneFormControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\uc804\ud654\ubc88\ud638 *"),i.createElement(K.a,{placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined",type:"text"},i.createElement(Ee.a,{mask:"(999)-9999-9999"})),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.buttons,variant:"contained"},"+"),i.createElement(R.a,{className:t.buttons,variant:"contained"},"-")))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.buttonFormControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"Email *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.buttons,variant:"contained"},"+"),i.createElement(R.a,{className:t.buttons,variant:"contained"},"-")))),i.createElement("div",{className:t.inputBox},i.createElement($.a,{className:t.buttonFormControl},i.createElement(se.a,{shrink:!0,htmlFor:"bootstrap-input"},"\uc8fc\uc18c *"),i.createElement(K.a,{id:"outlined-full-width",placeholder:"\uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694.",margin:"normal",variant:"outlined"}),i.createElement("div",{className:t.buttonForm},i.createElement(R.a,{className:t.buttons,variant:"contained"},"+"),i.createElement(R.a,{className:t.buttons,variant:"contained"},"-"))))),i.createElement("div",{className:t.input4},i.createElement("div",{className:t.input4Button},i.createElement(M.a,{to:"/"},i.createElement(R.a,{variant:"contained",color:"primary",fullWidth:!0},"\ucde8\uc18c")),i.createElement(M.a,{to:"/"},i.createElement(R.a,{variant:"contained",color:"primary",fullWidth:!0},"\uac00\uc785"))))))},be=a(122),ye=a(88);var ve=function(e,t,a){return a[t[e]]},xe=Object(pe.a)(function(e){return{box:function(e){return{display:"flex",alignItems:"center",borderRadius:8,background:ve("color",e,{red:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",blue:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"}),height:e.size,width:e.size}},text:{color:"white"}}}),we=function(e){e.size;var t=Object(be.a)(e,["size"]),a=xe(e);return i.createElement(ye.a,Object.assign({className:a.box},t),i.createElement(m.a,{variant:"subtitle1",className:a.text},"I'm an example how to handle dynamic styles based on props"))};var Ne=Object(A.a)({root:{height:"100%",textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{flex:1,height:"90%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},button:{marginTop:20}}),Oe=function(e){var t=Ne(),a=i.useState("red"),n=Object(u.a)(a,2),r=n[0],l=n[1],o=Object(d.d)(function(e){return e.todoList});return i.createElement("div",{className:t.root},i.createElement(m.a,{variant:"h4",gutterBottom:!0},"You have ",o.length," TODOs in your list!"),i.createElement("div",{className:t.centerContainer},i.createElement(we,{size:300,color:r}),i.createElement(R.a,{className:t.button,onClick:function(){return l("red"===r?"blue":"red")},variant:"outlined",color:"primary"},"Change Color")))},Ce=a(233),je=a(225),Fe=a(226),Te=a(227),Be=a(228),ke=a(229),Ie=a(245),Le=a(172),Se=a(118),De=a.n(Se);function Pe(e,t){var a=Object(d.c)();return Object(i.useMemo)(function(){return Array.isArray(e)?e.map(function(e){return Object(g.bindActionCreators)(e,a)}):Object(g.bindActionCreators)(e,a)},t?[a].concat(Object(N.a)(t)):t)}function Ae(e){return{type:l.ADD_TODO,payload:e}}function Me(e){return function(t,a){t({type:l.COMPLETE_TODO,payload:e})}}function ze(e){return{type:l.UNCOMPLETE_TODO,payload:e}}function _e(e){return{type:l.DELETE_TODO,payload:e}}var We=Object(A.a)({paper:{width:"100%",minWidth:260,display:"inline-block"},table:{width:"100%"}}),Re=function(e){var t=We(),a=Object(d.d)(function(e){return e.todoList}),n=Pe(r);return i.createElement(ye.a,{className:t.paper},i.createElement(je.a,{className:t.table},i.createElement(Fe.a,null,i.createElement(Te.a,null,i.createElement(Be.a,{padding:"default"},"Completed"),i.createElement(Be.a,{padding:"default"},"Text"),i.createElement(Be.a,{padding:"default"},"Delete"))),i.createElement(ke.a,null,a.map(function(e){return i.createElement(Te.a,{key:e.id,hover:!0,onClick:function(t){var a;(a=e).completed?n.uncompleteTodo(a.id):n.completeTodo(a.id)}},i.createElement(Be.a,{padding:"none"},i.createElement(Ie.a,{checked:e.completed})),i.createElement(Be.a,{padding:"none"},e.text),i.createElement(Be.a,{padding:"none"},i.createElement(Le.a,{"aria-label":"Delete",color:"default",onClick:function(){return n.deleteTodo(e.id)}},i.createElement(De.a,null))))}))))},Ge=a(230),He=a(231),Ue=a(232);var Je=Object(A.a)({textField:{width:"80%",margin:20}}),Ke=function(e){var t=e.open,a=e.onClose,n=Je(),l=i.useState(""),o=Object(u.a)(l,2),c=o[0],m=o[1],d=Pe(r),s=function(){d.addTodo({id:Math.random(),completed:!1,text:c}),a(),m("")};return i.createElement(Ge.a,{open:t,onClose:s},i.createElement(He.a,null,"Add a new TODO"),i.createElement(K.a,{id:"multiline-flexible",multiline:!0,value:c,onChange:function(e){m(e.target.value)},className:n.textField}),i.createElement(Ue.a,null,i.createElement(R.a,{color:"primary",onClick:s},"OK")))};var Ye=Object(A.a)(function(e){return{root:Object(w.a)({padding:20},e.breakpoints.down("md"),{paddingTop:50,paddingLeft:15,paddingRight:15}),buttonContainer:{width:"100%",display:"flex",justifyContent:"flex-end"},button:{marginBottom:15}}}),qe=[{path:"/login",component:de,layout:"/test/sub"},{path:"/findId",component:J,layout:"/test/sub"},{path:"/emailFindId",component:q,layout:"/test/sub"},{path:"/phoneFindId",component:V,layout:"/test/sub"},{path:"/findPassword",component:Z,layout:"/test/sub"},{path:"/choiceFindPW",component:re,layout:"/test/sub"},{path:"/signUp",component:ge,layout:"/test/sub"},{path:"/homePage",component:Oe,layout:"/main"},{path:"/todoPage",component:function(e){var t=Ye(),a=i.useState(!1),n=Object(u.a)(a,2),r=n[0],l=n[1];return i.createElement(Ce.a,{container:!0,className:t.root},i.createElement(Ke,{open:r,onClose:function(){l(!1)}}),i.createElement(Ce.a,{item:!0,xs:6},i.createElement(m.a,{variant:"h4",gutterBottom:!0},"Todo List")),i.createElement(Ce.a,{item:!0,xs:6},i.createElement("div",{className:t.buttonContainer},i.createElement(R.a,{className:t.button,variant:"contained",color:"secondary",onClick:function(){l(!0)}},"Add Todo"))),i.createElement(Ce.a,{item:!0,xs:12},i.createElement(Re,null)))},layout:"/main"}];function Qe(){var e=Ve();return i.createElement("div",{className:e.root},i.createElement(h.d,null,qe.map(function(e,t){if("/test/sub"===e.layout)return i.createElement(h.b,{key:t,path:e.layout+e.path,component:e.component})}),i.createElement(h.a,{from:"/",to:"/test/sub/login"})))}var Ve=Object(A.a)(function(e){return{root:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},content:{width:"100%",height:"100%"}}});var Xe=Object(d.b)(function(e){return{todoList:e.todoList}})(P(Object(p.a)()(function(e){return e?i.createElement(h.c,{history:T},i.createElement(Qe,null)):null}))),Ze=a(234),$e=a(223),et=a(235),tt=a(236),at=a(237),nt=a(238),rt=a(239),lt=a(246),ot=a(247),it=a(240),ct=a(86),mt=a.n(ct),dt=a(119),st=a.n(dt),ut=a(120),pt=a.n(ut);function ht(){var e=gt();return i.createElement("div",{className:e.content},i.createElement(h.d,null,qe.map(function(e,t){if("/main"===e.layout)return i.createElement(h.b,{key:t,path:e.layout+e.path,component:e.component})}),i.createElement(h.a,{from:"/main",to:"/main/homePage"})))}function Et(e){var t=gt();return i.createElement("div",null,i.createElement("div",{className:t.drawerHeader}),i.createElement(Ze.a,null),i.createElement($e.a,null,i.createElement(et.a,{button:!0,onClick:function(){return T.push("/")}},i.createElement(tt.a,null,i.createElement(st.a,null)),i.createElement(at.a,{primary:"Home"}))),i.createElement(Ze.a,null),i.createElement($e.a,null,i.createElement(et.a,{button:!0,onClick:function(){return T.push("/todo")}},i.createElement(tt.a,null,i.createElement(ft,{todoList:e.todoList})),i.createElement(at.a,{primary:"Todo"}))))}function ft(e){var t=e.todoList.filter(function(e){return!1===e.completed});return t.length>0?i.createElement(it.a,{color:"secondary",badgeContent:t.length},i.createElement(mt.a,null)):i.createElement(mt.a,null)}var gt=Object(A.a)(function(e){return{root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,position:"absolute"},navIconHide:Object(w.a)({},e.breakpoints.up("md"),{display:"none"}),drawerHeader:e.mixins.toolbar,drawerPaper:Object(w.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"}),content:Object(w.a)({backgroundColor:e.palette.background.default,width:"100%",height:"calc(100% - 56px)",marginTop:56},e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64})}});var bt=Object(d.b)(function(e){return{todoList:e.todoList}})(P(Object(p.a)()(function(e){var t=gt(),a=i.useState(!0),n=Object(u.a)(a,2),r=n[0],l=n[1];if(!e)return null;var o=function(){l(!r)};return i.createElement(h.c,{history:T},i.createElement("div",{className:t.root},i.createElement("div",{className:t.appFrame},i.createElement(nt.a,{className:t.appBar},i.createElement(rt.a,null,i.createElement(Le.a,{color:"inherit","aria-label":"open drawer",onClick:o,className:t.navIconHide},i.createElement(pt.a,null)),i.createElement(m.a,{variant:"h6",color:"inherit",noWrap:Object(p.c)("sm",e.width)},"Create-React-App with Material-UI, Typescript, Redux and Routing"))),i.createElement(lt.a,{mdUp:!0},i.createElement(ot.a,{variant:"temporary",anchor:"left",open:r,classes:{paper:t.drawerPaper},onClose:o,ModalProps:{keepMounted:!0}},i.createElement(Et,{todoList:e.todoList}))),i.createElement(lt.a,{smDown:!0},i.createElement(ot.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},i.createElement(Et,{todoList:e.todoList}))),i.createElement(ht,null))))})));var yt=Object(d.b)(function(e){return{todoList:e.todoList}})(P(Object(p.a)()(function(e){var t=i.useState(!0),a=Object(u.a)(t,2);return a[0],a[1],e?i.createElement(h.c,{history:T},i.createElement(h.d,null,i.createElement(h.b,{path:"/test/sub",component:Xe}),i.createElement(h.b,{path:"/main",component:bt}),i.createElement(h.a,{from:"/",to:"/test/sub/login"}))):null}))),vt=function(){var e=Object(g.createStore)(k,{},B);return{store:e,persistor:Object(y.b)(e)}}(),xt=vt.persistor,wt=vt.store;var Nt=function(){return i.createElement(d.a,{store:wt},i.createElement(s.a,{loading:i.createElement(m.a,null,"Loading..."),persistor:xt},i.createElement(yt,null)))},Ot=document.getElementById("root");c.render(i.createElement(Nt,null),Ot)}},[[128,1,2]]]);
//# sourceMappingURL=main.199dbf08.chunk.js.map