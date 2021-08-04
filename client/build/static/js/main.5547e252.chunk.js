(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{227:function(e,t,r){},228:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(91),c=r.n(a),i=r(4),o=r(2),u=r(7),l=r(8),d=r(11),h=r(10),j=r(37),p=r.n(j),b=r(0),m=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={courses:[]},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/api/courses").then((function(t){e.setState({courses:t.data})})).catch((function(t){console.log("Error fetching and parsing data",t),e.props.history.push("/error")}))}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap main--grid",children:[this.state.courses.map((function(e){return Object(b.jsxs)(i.b,{to:"/courses/".concat(e.id),className:"course--module course--link",href:"course-detail.html",children:[Object(b.jsx)("h2",{className:"course--label",children:"Course"}),Object(b.jsx)("h3",{className:"course--title",children:e.title})]},e.id)})),Object(b.jsx)(i.b,{to:"/courses/create",className:"course--module course--add--module",href:"create-course.html",children:Object(b.jsxs)("span",{className:"course--add--title",children:[Object(b.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add",children:Object(b.jsx)("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})}),"New Course"]})})]})})})}}]),r}(n.Component),x=r(50),f=r.n(x),O=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={course:[],user:[],errors:[]},e.delete=function(){var t=e.props.context,r=t.authenticatedUser,n=e.state.course.id;t.data.deleteCourse(r.emailAddress,r.password,n).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/api/courses/".concat(this.props.match.params.id)).then((function(t){e.setState({course:t.data,user:t.data.user})})).catch((function(t){e.props.context.authenticatedUser&&(console.log("Error fetching and parsing data",t),e.props.history.push("/notfound"))}))}},{key:"render",value:function(){var e=this,t=this.props.context;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("main",{children:[Object(b.jsx)("div",{className:"actions--bar",children:Object(b.jsxs)("div",{className:"wrap",children:[t.authenticatedUser?t.authenticatedUser.userId===this.state.user.id&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{to:"/courses/".concat(this.props.match.params.id,"/update"),className:"button",href:"update-course.html",children:"Update Course"}),Object(b.jsx)("button",{className:"button",href:"#",onClick:function(){return e.delete()},children:"Delete Course"})]}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(i.b,{to:"/",className:"button button-secondary",href:"index.html",children:"Return to List"})]})}),Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Course Detail"}),Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"main--flex",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"course--detail--title",children:"Course"}),Object(b.jsx)("h4",{className:"course--name",children:this.state.course.title}),Object(b.jsx)("p",{children:"".concat(this.state.user.firstName," ").concat(this.state.user.lastName)}),Object(b.jsx)(f.a,{children:"".concat(this.state.course.description)})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"course--detail--title",children:"Estimated Time"}),Object(b.jsx)("p",{children:this.state.course.estimatedTime}),Object(b.jsx)("h3",{className:"course--detail--title",children:"Materials Needed"}),Object(b.jsx)("ul",{className:"course--detail--list",children:Object(b.jsx)(f.a,{children:this.state.course.materialsNeeded})})]})]})})]})]})})}}]),r}(n.Component),v=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.context.authenticatedUser;return Object(b.jsx)("header",{children:Object(b.jsxs)("div",{className:"wrap header--flex",children:[Object(b.jsx)("h1",{className:"header--logo",children:Object(b.jsx)(i.b,{to:"/",href:"index.html",children:"Courses"})}),Object(b.jsx)("nav",{children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:"header--signedin",children:["Welcome, ",e.firstName]}),Object(b.jsx)(i.b,{to:"/signout",children:" Sign Out"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{to:"/signup",children:"Sign Up "}),Object(b.jsx)(i.b,{to:"/signin",children:"Sign In "})]})})]})})}}]),r}(n.Component),g=r(19);function w(e){var t=e.errors,r=null;return t.length&&(r=Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"validation-errors",children:[Object(b.jsx)("h3",{children:"Validation Errors"}),Object(b.jsx)("ul",{children:t.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]})})),r}var y=function(e){var t=e.cancel,r=e.errors,n=e.submit,s=e.submitButtonText,a=e.elements;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{errors:r}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n()},children:[a(),Object(b.jsx)("button",{className:"button",type:"submit",children:s}),Object(b.jsx)("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t()},children:"Cancel"})]})]})},N=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={emailAddress:"",password:"",errors:[]},e.change=function(t){var r=t.target.name,n=t.target.value;e.setState((function(){return Object(g.a)({},r,n)}))},e.submit=function(){var t=e.props.context,r=(e.props.location.state||{from:{pathname:"/"}}).from,n=e.state,s=n.emailAddress,a=n.password;t.actions.signIn(s,a).then((function(t){null===t?e.setState((function(){return{errors:["Sign-in was unsuccessful"]}})):e.props.history.push(r)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.emailAddress,n=t.password,s=t.errors;return Object(b.jsxs)("div",{className:"form--centered",children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsx)(y,{cancel:this.cancel,errors:s,submit:this.submit,submitButtonText:"Sign In",elements:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{id:"emailAddress",name:"emailAddress",type:"text",value:r,onChange:e.change,placeholder:"Email Address"}),Object(b.jsx)("input",{id:"password",name:"password",type:"password",value:n,onChange:e.change,placeholder:"Password"})]})}}),Object(b.jsxs)("p",{children:["Don't have a user account? Click here to",Object(b.jsx)(i.b,{to:"/signup",children:" sign up"})]})]})}}]),r}(n.Component),C=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",errors:[]},e.change=function(t){var r=t.target.name,n=t.target.value;e.setState((function(){return Object(g.a)({},r,n)}))},e.submit=function(){var t=e.props.context,r=e.state,n=r.firstName,s=r.lastName,a=r.emailAddress,c=r.password,i=r.confirmPassword,o={firstName:n,lastName:s,emailAddress:a,password:c,confirmPassword:i};t.data.createUser(o).then((function(r){r.length?e.setState({errors:r}):t.actions.signIn(a,c).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.firstName,n=t.lastName,s=t.emailAddress,a=t.password,c=t.confirmPassword,o=t.errors;return Object(b.jsxs)("div",{className:"form--centered",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsx)(y,{cancel:this.cancel,errors:o,submit:this.submit,submitButtonText:"Sign Up",elements:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{id:"firstName",name:"firstName",type:"text",value:r,onChange:e.change,placeholder:"Name"}),Object(b.jsx)("input",{id:"lastName",name:"lastName",type:"text",value:n,onChange:e.change,placeholder:"Last Name"}),Object(b.jsx)("input",{id:"emailAddress",name:"emailAddress",type:"email",value:s,onChange:e.change,placeholder:"Email Address"}),Object(b.jsx)("input",{id:"password",name:"password",type:"password",value:a,onChange:e.change,placeholder:"Password"}),Object(b.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:c,onChange:e.change,placeholder:"Confirm Password"})]})}}),Object(b.jsxs)("p",{children:["Already have a user account? Click here to ",Object(b.jsx)(i.b,{to:"/signin",children:"sign in!"})]})]})}}]),r}(n.Component),k=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},e.change=function(t){var r=t.target.name,n=t.target.value;e.setState((function(){return Object(g.a)({},r,n)}))},e.submit=function(){var t=e.props.context,r=t.authenticatedUser,n=r.userId,s=e.state,a={title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded,userId:n};t.data.createCourse(a,r.emailAddress,r.password).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.props.context.authenticatedUser,r=this.state,n=r.title,s=r.description,a=r.estimatedTime,c=r.materialsNeeded,i=r.errors;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Create Course"}),Object(b.jsx)(y,{cancel:this.cancel,errors:i,submit:this.submit,submitButtonText:"Create Course",elements:function(){return Object(b.jsxs)("div",{className:"main--flex",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"courseTitle",children:"Course Title"}),Object(b.jsx)("input",{id:"title",name:"title",type:"text",value:n,onChange:e.change}),Object(b.jsxs)("p",{children:[t.firstName," ",t.lastName]}),Object(b.jsx)("label",{htmlFor:"courseDescription",children:"Course Description"}),Object(b.jsx)("textarea",{id:"description",name:"description",type:"text",onChange:e.change,value:s})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(b.jsx)("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:a,onChange:e.change}),Object(b.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(b.jsx)("textarea",{id:"materialsNeeded",name:"materialsNeeded",type:"text",onChange:e.change,value:c})]})]})}})]})})})}}]),r}(n.Component),T=r(6),S=r.n(T),U=r(18),A=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={user:{},title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},e.change=function(t){var r=t.target.name,n=t.target.value;e.setState((function(){return Object(g.a)({},r,n)}))},e.submit=function(){var t=e.props.context,r=t.authenticatedUser,n=r.userId,s=e.props.match.params.id,a=e.state,c={title:a.title,description:a.description,estimatedTime:a.estimatedTime,materialsNeeded:a.materialsNeeded,userId:n};t.data.updateCourse(c,r.emailAddress,r.password,s).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/courses/".concat(s))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){var t=e.props.match.params.id;e.props.history.push("/courses/".concat(t))},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(U.a)(S.a.mark((function e(){var t,r,n=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,r=this.props.context.authenticatedUser,e.next=4,this.props.context.data.getCourse(t).then((function(e){n.setState({user:e.user,title:e.title,description:e.description,estimatedTime:e.estimatedTime,materialsNeeded:e.materialsNeeded}),r.userId!==e.user.id&&n.props.history.push("/forbidden")})).catch((function(e){console.log("Error fetching and parsing data",e),n.props.history.push("/notfound")}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.user,r=this.state,n=r.title,s=r.description,a=r.estimatedTime,c=r.materialsNeeded,i=r.errors;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Update Course"}),Object(b.jsx)(y,{cancel:this.cancel,errors:i,submit:this.submit,submitButtonText:"Update Course",elements:function(){return Object(b.jsxs)("div",{className:"main--flex",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"courseTitle",children:"Course Title"}),Object(b.jsx)("input",{id:"title",name:"title",type:"text",value:n,onChange:e.change}),Object(b.jsxs)("p",{children:[t.firstName," ",t.lastName]}),Object(b.jsx)("label",{htmlFor:"courseDescription",children:"Course Description"}),Object(b.jsx)("textarea",{id:"description",name:"description",value:s,onChange:e.change})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(b.jsx)("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:a,onChange:e.change}),Object(b.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(b.jsx)("textarea",{id:"materialsNeeded",name:"materialsNeeded",value:c,onChange:e.change})]})]})}})]})})})}}]),r}(n.Component),F=function(e){var t=e.context;return Object(n.useEffect)((function(){return t.actions.signOut()})),Object(b.jsx)(o.a,{to:"/"})},E=r(25),I={apiBaseUrl:"/api/users"},P=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=I.apiBaseUrl+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==r&&(c.body=JSON.stringify(r)),n){var i=btoa("".concat(s.emailAddress,":").concat(s.password));c.headers.Authorization="Basic ".concat(i," ")}return fetch(a,c)}},{key:"getUser",value:function(){var e=Object(U.a)(S.a.mark((function e(t,r){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{emailAddress:t,password:r});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e})));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getCourse",value:function(){var e=Object(U.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json().then((function(e){return e})));case 7:if(401!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(U.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==r.status){e.next=11;break}return e.abrupt("return",r.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(U.a)(S.a.mark((function e(t,r,n){var s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,{emailAddress:r,password:n});case 2:if(201!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case 13:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(U.a)(S.a.mark((function e(t,r,n,s){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(s),"PUT",t,!0,{emailAddress:r,password:n});case 2:if(204!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==a.status){e.next=11;break}return e.abrupt("return",a.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case 13:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(U.a)(S.a.mark((function e(t,r,n){var s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(n),"DELETE",null,!0,{emailAddress:t,password:r});case 2:if(204!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),e}(),D=r(38),B=r.n(D),M=s.a.createContext(),J=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.call(this)).state={authenticatedUser:B.a.getJSON("authenticatedUser")||null},e.signIn=function(){var t=Object(U.a)(S.a.mark((function t(r,n){var s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getUser(r,n);case 2:return null!==(s=t.sent)&&(e.setState((function(){return s.password=n,s.emailAddress=r,{authenticatedUser:s}})),B.a.set("authenticatedUser",JSON.stringify(s),{expires:1})),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),e.signOut=function(){e.setState((function(){return{authenticatedUser:null}})),B.a.remove("authenticatedUser")},e.data=new P,e}return Object(l.a)(r,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,data:this.data,actions:{signIn:this.signIn,signOut:this.signOut}};return Object(b.jsx)(M.Provider,{value:e,children:this.props.children})}}]),r}(n.Component),L=M.Consumer;function W(e){return function(t){return Object(b.jsx)(M.Consumer,{children:function(r){return Object(b.jsx)(e,Object(E.a)(Object(E.a)({},t),{},{context:r}))}})}}var G=r(93),z=["component"],R=function(e){var t=e.component,r=Object(G.a)(e,z);return Object(b.jsx)(L,{children:function(e){return Object(b.jsx)(o.b,Object(E.a)(Object(E.a)({},r),{},{render:function(r){return e.authenticatedUser?Object(b.jsx)(t,Object(E.a)({},r)):Object(b.jsx)(o.a,{to:{pathname:"/signin",state:{from:r.location}}})}}))}})},V=function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Not Found"}),Object(b.jsx)("p",{children:"Sorry! We couldn't find the page you're looking for."})]})})},Y=function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Forbidden"}),Object(b.jsx)("p",{children:"Oh oh! You can't access this page."})]})})},q=function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h2",{children:"Error"}),Object(b.jsx)("p",{children:"Sorry! We just encountered an unexpected error."})]})})},H=W(C),K=W(N),Q=W(v),X=W(F),Z=W(k),$=W(m),_=W(O),ee=W(A),te=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(Q,{})," ",Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",component:$}),Object(b.jsx)(R,{exact:!0,path:"/courses/create",component:Z}),Object(b.jsx)(o.b,{exact:!0,path:"/courses/:id",component:_}),Object(b.jsx)(o.b,{exact:!0,path:"/signin",component:K}),Object(b.jsx)(o.b,{exact:!0,path:"/signup",component:H}),Object(b.jsx)(o.b,{exact:!0,path:"/signout",component:X}),Object(b.jsx)(R,{exact:!0,path:"/courses/:id/update",component:ee}),Object(b.jsx)(o.b,{exact:!0,path:"/notfound",component:V}),Object(b.jsx)(o.b,{exact:!0,path:"/forbidden",component:Y}),Object(b.jsx)(o.b,{exact:!0,path:"/error",component:q}),Object(b.jsx)(o.b,{component:V})]})]})})},re=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,229)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};r(227);c.a.render(Object(b.jsx)(J,{children:Object(b.jsx)(te,{})}),document.getElementById("root")),re()}},[[228,1,2]]]);
//# sourceMappingURL=main.5547e252.chunk.js.map