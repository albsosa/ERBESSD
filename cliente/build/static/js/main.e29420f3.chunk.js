(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},258:function(e,t,n){},260:function(e,t,n){},262:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(78),c=n.n(r),i=(n(91),n(5)),s=n(6),l=n(10),u=n(8),h=n(11),m=n(266),d=(n(93),function(){return o.a.createElement("header",null,o.a.createElement(m.a,{to:"/"},o.a.createElement("img",{className:"logo",src:"../img/logo.png"})))}),p=n(269),g=n(267),f=n(79),v=n.n(f),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},o.a.createElement("img",{src:v.a,alt:"loading"}))}}]),t}(a.Component),b=n(80),k=n.n(b)()(),y=n(81),j={domain:"dev-kcq7ruco.auth0.com",clientId:"fLGsQ42Us4cHss4SRjMniWGucIQr5gzZ",callbackUrl:"http://localhost:3000/callback",apiURL:"http://graficas"},O=function(){function e(){Object(i.a)(this,e),this.auth0=new y.a.WebAuth({domain:j.domain,clientID:j.clientId,redirectUri:j.callbackUrl,audience:j.apiURL,responseType:"token id_token",scope:"read:graficas"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(s.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(k.replace("/productos"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getIdToken",value:function(){return this.idToken}},{key:"getAccessToken",value:function(){var e=localStorage.getItem("access_token");return e||new Error("Hubo un error al generar el token")}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,k.replace("/productos")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),k.replace("/productos")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}(),w=(n(100),n(82)),A=n(84),T=n.n(A),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={productos:[]},n.queryAPI=function(){var e=n.props.auth.getAccessToken,t={Authorization:"Bearer ".concat(e())};return T.a.get("http://localhost:5000/productos",{headers:t}).then(function(e){return n.setState({productos:e.data})})},n.login=function(){n.props.auth.login()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.queryAPI()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return o.a.createElement("div",{className:"productos"},e()&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Nuestra Gr\xe1ficas"),o.a.createElement("div",{className:"chart",location:"Massachusetts",legendPosition:"bottom"},o.a.createElement(w.a,{data:this.state.productos,width:1e3,height:500,options:{maintainAspectRatio:!1}}))),!e()&&o.a.createElement("div",{className:"contenedor-boton"},o.a.createElement("p",null,"Para ver el contenido debes estar logueado:"),o.a.createElement("a",{className:"boton",onClick:this.login},"Iniciar Sesi\xf3n")))}}]),t}(a.Component),I=(n(258),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contenedor-nosotros"},o.a.createElement("div",{className:"imagen"},o.a.createElement("img",{src:"/img/WISER_MANO-1-e1544637765529.png",alt:"Imagen nosotros"})),o.a.createElement("div",{className:"contenido"},o.a.createElement("h2",null,"A trav\xe9s del tiempo..."),o.a.createElement("p",null,"Es dif\xedcil imaginar como una peque\xf1a idea puede transformar la vida de tanta gente\u2026"),o.a.createElement("p",null,"\u2013 Acabo de tener una idea! Que tal si compro una fotoresistencia y un resistor e intento hacer un sensor \xf3ptico con eso para poder balancear con mi computadora -.")))}}]),t}(a.Component)),S=(n(260),function(){return o.a.createElement("form",null,o.a.createElement("legend",null,"Formulario de Contacto"),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Nombre: "),o.a.createElement("input",{type:"text",placeholder:"Tu nombre"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Email: "),o.a.createElement("input",{type:"email",placeholder:"Tu nombre"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Mensaje: "),o.a.createElement("textarea",null)),o.a.createElement("div",{className:"input-field enviar"},o.a.createElement("input",{type:"submit",value:"Enviar"})))}),C=(a.Component,n(262),n(268)),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).iniciarSesion=function(){n.props.auth.login()},n.cerrarSesion=function(){n.props.auth.logout()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return console.log(this.props.auth.getAccessToken()),e=(0,this.props.auth.isAuthenticated)()?o.a.createElement("a",{onClick:this.cerrarSesion},"Cerrar Sesi\xf3n"):o.a.createElement("a",{onClick:this.iniciarSesion},"Iniciar Sesi\xf3n"),o.a.createElement("nav",{className:"navegacion"},o.a.createElement(C.a,{to:"/nosotros",activeClassName:"activo"},"Nosotros"),o.a.createElement(C.a,{to:"/productos",activeClassName:"activo"},"Gr\xe1ficas de productos"),o.a.createElement(C.a,{to:"/contacto",activeClassName:"activo"},"Contacto"),e)}}]),t}(a.Component),U=new O,W=o.a.createElement(p.a,{history:k},o.a.createElement("div",{className:"contenedor"},o.a.createElement(d,null),o.a.createElement(x,{auth:U}),o.a.createElement(g.a,{exact:!0,path:"/",render:function(){return o.a.createElement(I,null)}}),o.a.createElement(g.a,{exact:!0,path:"/nosotros",render:function(){return o.a.createElement(I,null)}}),o.a.createElement(g.a,{exact:!0,path:"/productos",render:function(e){return o.a.createElement(N,Object.assign({auth:U},e))}}),o.a.createElement(g.a,{exact:!0,path:"/contacto",component:S}),o.a.createElement(g.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&U.handleAuthentication()}(e),o.a.createElement(E,e)}}))),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,W)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n.p+"static/media/loading.c5590569.svg"},86:function(e,t,n){e.exports=n(265)},91:function(e,t,n){},93:function(e,t,n){}},[[86,2,1]]]);
//# sourceMappingURL=main.e29420f3.chunk.js.map