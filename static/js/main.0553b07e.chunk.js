(this["webpackJsonptodo-manager"]=this["webpackJsonptodo-manager"]||[]).push([[0],{41:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),s=a(22),o=a.n(s),l=a(18),c=[{id:"1",title:"Grocery Shopping",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"94",complete:!1,task:"2pk White Bread"},{id:"98342",complete:!0,task:"1pk Sugar Cookies"},{id:"308",complete:!1,task:"Orange Juice"}],list_color:"rgba( 247 , 146 , 247 , 0.73 )",font_color:"rgba( 77 , 10 , 77 , 0.73 )"},{id:"2",title:"Well-modulated",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"6796853040",complete:!0,task:"varius"},{id:"6467233107",complete:!0,task:"arcu adipiscing molestie hendrerit"},{id:"7864789803",complete:!1,task:"posuere nonummy integer"},{id:"9754086559",complete:!0,task:"sed accumsan"},{id:"3938070684",complete:!1,task:"est donec odio"},{id:"2046409876",complete:!0,task:"erat vestibulum sed"},{id:"9832189462",complete:!0,task:"pretium nisl ut"},{id:"4471481118",complete:!0,task:"ut odio"},{id:"4620938807",complete:!0,task:"pellentesque viverra pede ac"},{id:"9728872070",complete:!0,task:"in purus"}],list_color:"rgba( 77 , 10 , 77 , 0.73 )",font_color:"rgba( 15 , 1 , 15 , 1 )"},{id:"3",title:"Function",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"3863931157",complete:!1,task:"pellentesque"},{id:"6627432781",complete:!0,task:"tellus nulla ut erat"}],list_color:"rgba( 209 , 205 , 132 , 0.66 )",font_color:"rgba( 9 , 80 , 86 , 1 )"},{id:"4",title:"5th generation",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"4172904009",complete:!0,task:"interdum in"},{id:"5309355650",complete:!0,task:"est"},{id:"9570823844",complete:!1,task:"rhoncus aliquam"},{id:"4335041144",complete:!1,task:"metus sapien"},{id:"7173781590",complete:!1,task:"convallis morbi"}],list_color:"rgba( 132 , 209 , 171 , 0.66 )",font_color:"rgba( 51 , 29 , 51 , 1 )"},{id:"5",title:"Intranet",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"2467379361",complete:!1,task:"imperdiet sapien"},{id:"9632328426",complete:!0,task:"dictumst maecenas ut massa"},{id:"1904616461",complete:!0,task:"lectus"},{id:"0522886000",complete:!1,task:"luctus et"},{id:"4306920453",complete:!1,task:"nulla ultrices aliquet maecenas"},{id:"1447855736",complete:!1,task:"eget eros"},{id:"5239441146",complete:!1,task:"lobortis est phasellus sit"},{id:"6321392626",complete:!1,task:"porta volutpat"}],list_color:"rgba( 132 , 209 , 209 , 0.71 )",font_color:"rgba( 44 , 42 , 44 , 1 )"},{id:"6",title:"Cross-group",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"2654592251",complete:!1,task:"justo sollicitudin"},{id:"1598787705",complete:!1,task:"duis mattis"}],list_color:"rgba(255, 51, 51, 1)",font_color:"rgba(255,255,255,1)"},{id:"7",title:"Interactive",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"6708105608",complete:!1,task:"potenti in eleifend quam"},{id:"6559331628",complete:!0,task:"vel augue vestibulum"},{id:"8599848143",complete:!0,task:"nascetur ridiculus mus etiam"}],list_color:"rgba(241, 168, 154, 1)",font_color:"rgba(0,0,0,1)"},{id:"8",title:"Vision-oriented",creation_date:"Thu, 3rd July, 2021",task_list:[{id:"9185918458",complete:!1,task:"eu interdum eu tincidunt"},{id:"6836890758",complete:!0,task:"in tempor turpis"},{id:"7242377293",complete:!0,task:"at lorem integer tincidunt"},{id:"1272711463",complete:!1,task:"nisl nunc"},{id:"1972645498",complete:!1,task:"felis donec semper sapien"}],list_color:"rgba( 37 , 33 , 37 , 0.95 )",font_color:"rgba( 224 , 204 , 224 , 0.95 )"}],r={id:"",title:"",creation_date:"",task_list:[],list_color:"",font_color:""},d=function(t){return t.length>0?t[0].toUpperCase()+t.slice(1):t},u=function(t,e){var a,i=e,n=!1;return t.length>=1?(a=t.map((function(t){return t.id===i.id?(n=!0,i):t})),!1===n&&a.push(i)):a=[i],a},p=function(t,e){return t.filter((function(t){return t.id!==e}))},b=function(t){var e=t.split(" ");return{r:e[1],g:e[3],b:e[5],a:e[7]}},h=function(t,e,a){var i;if("add-list"===a){var n=!1;i=t.map((function(t,a){return t.id===e.id?(n=!0,e):t})),n||i.push(e)}else"delete-list"===a&&(i=p(t,e));return localStorage.setItem("task-collection",JSON.stringify(i)),i},m={todo_Collection:function(){var t=JSON.parse(localStorage.getItem("task-collection"));return t&&t.length>0?t:c}(),authored_list:r,isButtonVisible:!0},j=Object(l.b)({name:"list",initialState:m,reducers:{deleteTaskList:{reducer:function(t,e){t.todo_Collection=h(t.todo_Collection,e.payload,"delete-list")},prepare:function(t){return{payload:t}}},editTaskList:{reducer:function(t,e){t.authored_list=JSON.parse(e.payload)},prepare:function(t){return{payload:JSON.stringify(t)}}},updateTaskList:{reducer:function(t,e){"add-list"===e.payload[1]&&(t.todo_Collection=h(t.todo_Collection,e.payload[0],e.payload[1])),t.authored_list=r},prepare:function(t,e){return{payload:[t,e]}}},setCreationButton:{reducer:function(t,e){t.isButtonVisible=e.payload},prepare:function(t){return{payload:t}}}}}),f=j.actions,k=f.deleteTaskList,x=f.editTaskList,O=f.updateTaskList,g=f.setCreationButton,v=j.reducer,y=Object(l.a)({reducer:{todolist:v}}),_=a(6),C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),i(t),n(t),s(t),o(t)}))},A=(a(41),a(42),a(12)),w=a(13),N=a(15),S=a(14),T=a(16),B=a(4),I=a(11),U=a(17),D=a.n(U),J=a(23),Q=a(29),E=a.n(Q),K=a(60),L=a(5),G=a(19),Z=a(51),V=a(52),F=a(53),R=a(1),W=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(t){var i;return Object(A.a)(this,a),(i=e.call(this,t)).changeTask=function(t){13===t.keyCode?i.submitChanges(t,"add"):t.target.value.length<30&&i.setState((function(){return{task:d(t.target.value)}}))},i.submitChanges=function(){var t=Object(J.a)(D.a.mark((function t(e,a){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!(i.state.task.length>=1)){t.next=11;break}if(13!==e.keyCode&&"add"!==a&&"remove"!==a&&"complete"!==a){t.next=11;break}if("remove"!==a){t.next=8;break}return t.next=6,i.props.callback(a,i.state.id);case 6:t.next=11;break;case 8:return t.next=10,i.props.callback("add",Object(I.a)(Object(I.a)({},i.state),{},(n={},Object(G.a)(n,"complete"===a?"complete":e.target.name,"complete"===a?!i.props.complete:i.state.task),Object(G.a)(n,"user_input",!1),n)));case 10:i.props.new_input?i.setState((function(){return{id:Object(K.a)(),complete:!1,task:"",user_input:!0}})):i.setState((function(){return{id:i.props.id,complete:i.props.complete,task:i.props.task,user_input:i.props.user_input}}));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),i.changeElement=function(){i.setState((function(){return{user_input:!0}}))},i.state={id:i.props.id,complete:i.props.complete,task:i.props.task,user_input:i.props.user_input,style:i.props.style},i}return Object(w.a)(a,[{key:"shouldComponentUpdate",value:function(t,e){return this.props!==t||this.state!==e}},{key:"render",value:function(){var t=this,e=this.state.complete?{textDecoration:"line-through"}:{textDecoration:"none"},a=this.state.task.length>=1||!this.state.user_input?{visibility:"visible"}:{visibility:"hidden"};return Object(R.jsx)("div",{id:this.state.id,"data-testid":"task-component",className:"task container-fluid  rounded-pill  w-100 mb-1 ",style:{color:this.state.style},children:Object(R.jsxs)("form",{className:"row d-flex justify-content-center py-0 px-2 w-100",tabIndex:"0","data-testid":"task-form","aria-label":"task-form",onBlur:function(e){return t.submitChanges(e,"add")},onSubmit:function(e){return t.submitChanges(e,"add")},children:[Object(R.jsx)("div",{className:"col-1 d-flex justify-content-evenly align-items-center ",children:Object(R.jsx)("span",{role:"button",tabIndex:"0",title:"",style:a,name:"complete","data-testid":"task-complete",onClick:function(e){return t.submitChanges(e,"complete")},children:this.props.complete?Object(R.jsx)(Z.a,{className:"fake-checkbox"}):Object(R.jsx)(V.a,{className:"fake-checkbox"})})}),Object(R.jsx)("div",{className:"col-9 p-0 mx-0 ",children:this.state.user_input?Object(R.jsx)("input",{type:"text",tabIndex:"0",value:this.state.task,name:"task",placeholder:"Task",className:"fs-6",title:"Input task","data-testid":"Input task",style:e,onChange:function(e){t.changeTask(e)},onKeyPress:function(e){13===e.keyCode&&t.submitChanges(e,"add")}}):Object(R.jsxs)("div",{tabIndex:"0",onClick:this.changeElement,"data-testid":"input-display",role:"document",id:"input-display","aria-label":"Input display",style:e,children:[this.state.task," "]})}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)("span",{role:"button",title:"Delete task","data-testid":"delete-task",style:a,onClick:function(e){return t.submitChanges(e,"remove")},children:Object(R.jsx)(F.a,{className:"trash",role:"img","aria-label":"Delete task"})})})]})})}}]),a}(i.Component),H=a(54),M=a(55),q=Object(_.b)(null,(function(t){return Object(L.b)({callback:O},t)}))((function(t){return Object(R.jsxs)("div",{children:[Object(R.jsx)(T.b,{to:"/",onClick:function(){return t.callback("","clear-list")},title:"Add to trash",children:Object(R.jsx)(H.a,{className:"fs-3 text-danger me-2",title:"Add to trash",role:"img","aria-label":"Add to trash"})}),Object(R.jsx)(T.b,{to:"/",onClick:function(){t.list.task_list.length>0&&t.callback(t.list,"add-list")},title:"Save list",children:Object(R.jsx)(M.a,{className:"fs-3 text-primary ms-2",role:"img","aria-label":"Save list"})})]})})),Y=a(30),z=function(t){var e=function(t,e){var a;return function(){for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];clearTimeout(a),a=setTimeout((function(){return t.apply(void 0,n)}),e)}}((function(e){t.callback(function(t){var e=Object.is(t.a,NaN)||Object.is(t.a,null)?0:t.a;return"rgba( ".concat(t.r," , ").concat(t.g," , ").concat(t.b," , ").concat(e," )")}(e))}),20);return Object(R.jsxs)("div",{id:"color-selection",children:[Object(R.jsx)("img",{src:t.src,alt:t.alt,className:t.alt.includes("wheel")?"wheel":"letter"}),Object(R.jsx)("div",{className:"color-selector",children:Object(R.jsx)(Y.a,{color:b(t.color),onChange:e})})]})},P=a.p+"static/media/colorwheel3.544e4fd1.png",X=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(t){var i;return Object(A.a)(this,a),(i=e.call(this,t)).updateTitle=function(t){t.length<21&&i.setState((function(){return{title:d(t)}}))},i.updateTask=function(t,e){"add"===t?i.setState((function(t){return{task_list:u(t.task_list,e)}})):"remove"===t&&i.setState((function(t){return{task_list:p(t.task_list,e)}}))},i.backgroundColorChange=function(){var t=Object(J.a)(D.a.mark((function t(e){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.setState((function(){return{list_color:e}}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.fontColorChange=function(t){i.setState((function(){return{font_color:t}}))},i.state={id:Object(K.a)(),creation_date:E()().format("ddd, Do MMMM, YYYY"),title:"",task_list:[],list_color:"rgba( 255 , 255 , 255 , 1 )",font_color:"rgba( 0 , 0 , 0 , 1 )"},i}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var t=this;window.location.href.includes("create-list")&&this.props.callback(!1),""!==this.props.id&&this.setState((function(e){return{id:t.props.id,creation_date:t.props.creation_date,title:t.props.title,task_list:t.props.task_list,list_color:t.props.list_color,font_color:t.props.font_color}}))}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.font_color!==e.font_color||this.state.task_list.length!==e.task_list.length||this.state!==e}},{key:"render",value:function(){var t=this;return Object(R.jsxs)("div",{id:"task-list",className:"container-fluid d-flex flex-column justify-content-center align-items-center  ",children:[Object(R.jsxs)("div",{id:"item-list",style:{backgroundColor:this.state.list_color,color:this.state.font_color},className:"container border  border-radius-6  p-0 ","data-testid":"list container",children:[Object(R.jsxs)("div",{id:"item-title",className:"header w-100  ",children:[Object(R.jsx)("input",{id:"title-input",className:"w-100 text-center fs-3 ",type:"text",tabIndex:"0",value:this.state.title,placeholder:"Title","data-testid":"list-title",title:"Title",onChange:function(e){t.updateTitle(e.target.value)}}),Object(R.jsxs)("div",{className:"color-choices",children:[Object(R.jsx)(z,{callback:this.backgroundColorChange,color:this.state.list_color,src:P,alt:"Colorwheel with 6 different colors"}),Object(R.jsx)(z,{callback:this.fontColorChange,color:this.state.font_color,src:"data:image/png;base64,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",alt:"light blue capital A with red underline"})]})]}),Object(R.jsx)("div",{id:"date",className:"text-center align-middle mt-1 fst-italic","aria-label":"creation date",role:"document",title:"Creation date",children:this.state.creation_date}),Object(R.jsx)("div",{id:"task-array",className:"d-block",children:this.state.task_list.map((function(e,a){return Object(R.jsx)(W,Object(I.a)(Object(I.a)({},e),{},{callback:t.updateTask,user_input:!1,new_input:!1}),e.id)}))}),Object(R.jsx)(W,{autoFocus:!0,id:Object(K.a)(),complete:!1,task:"",user_input:!0,callback:this.updateTask,new_input:!0})]}),Object(R.jsx)(q,{list:this.state})]})}}]),a}(i.Component),$=Object(_.b)((function(t){return{id:t.todolist.authored_list.id,creation_date:t.todolist.authored_list.creation_date,title:t.todolist.authored_list.title,task_list:t.todolist.authored_list.task_list,list_color:t.todolist.authored_list.list_color,font_color:t.todolist.authored_list.font_color}}),(function(t){return Object(L.b)({callback:g},t)}))(X),tt=a(2),et=a.n(tt),at=a(56),it=function(t){return Object(R.jsxs)(T.b,{to:"/create-list",onClick:function(){return t.callback(r)},children:[Object(R.jsx)("span",{role:"alert","aria-label":"Create new list button "}),Object(R.jsx)("button",{type:"button",tabIndex:"0",className:"create-list-button p-0",children:Object(R.jsx)(at.a,{className:"fs-1 m-0 p-0",role:"img","aria-label":"Create a new Todo list"})})]})};it.prototype={callback:et.a.func};var nt=Object(_.b)(null,(function(t){return Object(L.b)({callback:x},t)}))(it),st=function(t){return Object(R.jsx)("header",{className:"container-fluid mx-0 py-4 ",children:Object(R.jsxs)("div",{className:" container-lg  d-block position-relative",children:[Object(R.jsx)("div",{role:"document","aria-label":"Application header",title:"Home",className:"col-12 d-flex flex-row justify-content-center align-items-canter",children:Object(R.jsx)("h2",{className:"mb-0",children:"Todo Manager"})}),t.componentTransition&&Object(R.jsx)(nt,{})]})})};st.prototype={componentTransition:et.a.bool};var ot=Object(_.b)((function(t){return{componentTransition:t.todolist.isButtonVisible}}))(st),lt=a(57),ct=a(58);var rt=function(){return Object(R.jsx)("footer",{className:"container-fluid mx-0 px-0 ",children:Object(R.jsxs)("div",{className:"container-lg px-0",children:[Object(R.jsx)("div",{className:"d-flex flex-row justify-content-around align-items-center",children:Object(R.jsxs)("div",{children:[Object(R.jsx)("a",{href:"https://www.linkedin.com/in/nialhope/",target:"_top",tabIndex:"0",title:"Go to Linkedin",children:Object(R.jsx)(lt.a,{className:"fs-6 mx-2 link ",role:"img","aria-label":"Go to Linkedin"})}),Object(R.jsx)("a",{href:"https://github.com/nhope123/todo-list",target:"_top",tabIndex:"0",title:"Go to Github repository",children:Object(R.jsx)(ct.a,{className:"fs-6 mx-2 link",role:"img","aria-label":"Go to Github repository"})})]})}),Object(R.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:Object(R.jsxs)("div",{id:"copyright",className:"py-1 ",children:["nhope"," \xa9 ","2021"]})})]})})},dt=a(59),ut=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(){return Object(A.a)(this,a),e.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){var t=this;return Object(R.jsxs)("section",{className:"card card-container",style:{border:"3px solid ".concat(this.props.list_color),backgroundColor:this.props.list_color},children:[Object(R.jsxs)("div",{className:"card-header left-border d-flex flex-row justify-content-center",children:[Object(R.jsx)("div",{"data-testid":"card-title",className:"card-title  m-0 text-truncate fw-bold ",style:{color:this.props.font_color},children:this.props.title}),Object(R.jsx)(dt.a,{role:"img","aria-label":"Delete this list",tabIndex:"0",className:"fs-6 d-inline-block  delete  position-absolute ",style:{color:this.props.font_color},onClick:function(){t.props.deleteCallback(t.props.id)}})]}),Object(R.jsxs)(T.b,{to:"/create-list",className:"text-decoration-none",onClick:function(){return t.props.openCallback(t.props)},children:[Object(R.jsx)("div",{"data-testid":"card-task-list",className:"card-body py-1 px-2 bg-white overflow-hidden",children:Object(R.jsx)("ul",{className:"list-group list-group-flush list-style-circle",children:this.props.task_list.map((function(t,e){return Object(R.jsx)("li",{className:"list-group-item  text-truncate",style:{textDecorationLine:t.complete?"line-through":"none"},children:t.task},"".concat(e))}))})}),Object(R.jsx)("div",{className:"card-footer right-border text-center fw-bold",style:{color:this.props.font_color},"data-testid":"card-date",children:this.props.creation_date})]})]})}}]),a}(i.Component);ut.defaultProps={list_color:"rgba( 255 , 255 , 255 , 1 )",font_color:"rgba( 0 , 0 , 0 , 1 )"};var pt=Object(_.b)(null,(function(t){return Object(L.b)({deleteCallback:k,openCallback:x},t)}))(ut),bt=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(){return Object(A.a)(this,a),e.apply(this,arguments)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){window.location.href.includes("create-list")||this.props.callback(!0)}},{key:"render",value:function(){return Object(R.jsxs)("main",{className:"container-fluid p-0  ",children:[Object(R.jsx)("div",{id:"display",className:"container-lg d-flex flex-row flex-wrap position-relative py-3 g-5 align-items-start justify-content-center ",children:this.props.collection.map((function(t,e){return Object(R.jsx)(pt,Object(I.a)({},t),t.id)}))}),Object(R.jsx)(rt,{})]})}}]),a}(i.Component),ht=Object(_.b)((function(t){return{collection:t.todolist.todo_Collection}}),(function(t){return Object(L.b)({callback:g},t)}))(bt),mt=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(){return Object(A.a)(this,a),e.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(R.jsx)(T.a,{basename:"/todo-manager/",children:Object(R.jsxs)("div",{className:"container-fluid px-0 d-block vw-100 max-vh-100 m-0",children:[Object(R.jsx)(ot,{}),Object(R.jsxs)(B.c,{children:[Object(R.jsx)(B.a,{path:"/",exact:!0,component:ht}),Object(R.jsx)(B.a,{path:"/create-list",component:$})]})]})})}}]),a}(i.Component);o.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(_.a,{store:y,children:Object(R.jsx)(mt,{})})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.0553b07e.chunk.js.map