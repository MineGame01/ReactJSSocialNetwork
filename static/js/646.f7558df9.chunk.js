"use strict";(self.webpackChunkreactjs_social_network=self.webpackChunkreactjs_social_network||[]).push([[646],{6646:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var r=s(5043),n=s(3003),o=s(5963),a=s(3842),i=s(7666);const c="LoginForm_body__4RI-8";var h=s(579);const l=(0,a.A)({form:"login"})((e=>{const{handleSubmit:t,error:s,url:r,isLoadesAuth:n,reset:a}=e;return(0,h.jsxs)("form",{onSubmit:t,className:c,children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.A,{name:"email",component:i.p,type:"email",placeholder:"Email"})}),(0,h.jsx)("div",{children:(0,h.jsx)(o.A,{name:"password",component:i.p,type:"password",placeholder:"Password"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)(o.A,{name:"rememberMe",component:"input",type:"checkbox"}),"Remember Me"]}),(0,h.jsx)("div",{children:(0,h.jsx)("div",{children:"Incorrect anti-bot symbols"===s&&(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:r,alt:r}),(0,h.jsx)("div",{children:(0,h.jsx)(o.A,{name:"captcha",component:i.p,type:"text",placeholder:"Captcha"})})]})})}),(0,h.jsx)("div",{style:{color:"red"},children:s&&(0,h.jsx)("span",{children:s})}),(0,h.jsx)("button",{disabled:n,type:"submit",className:"buttonDefault",children:"Login"}),(0,h.jsx)("button",{type:"button",onClick:a,className:"buttonDefault",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})}));class u extends r.Component{constructor(){super(...arguments),this.onSubmit=e=>{this.props.AuthLoginThunkCreator(e)}}componentDidMount(){this.props.getUrlCaptchaThunkCreator()}render(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"LOGIN"}),(0,h.jsx)(l,{onSubmit:this.onSubmit,url:this.props.urlCaptcha,isLoadesAuth:this.props.isLoadesAuth})]})}}const d=u;var p=s(3076),m=s(3216),x=s(22);class j extends r.Component{render(){const{getUrlCaptchaThunkCreator:e,AuthLoginThunkCreator:t,urlCaptcha:s,isLoadesAuth:r,isAuth:n}=this.props;return n?(0,h.jsx)(m.C5,{to:"/profile"}):(0,h.jsx)("div",{children:(0,h.jsx)(d,{getUrlCaptchaThunkCreator:e,AuthLoginThunkCreator:t,urlCaptcha:s,isLoadesAuth:r})})}}const C=(0,n.Ng)((e=>({urlCaptcha:(0,x.nS)(e),isLoadesAuth:(0,x.Ii)(e),isAuth:(0,x._v)(e)})),{getUrlCaptchaThunkCreator:p.U6,AuthLoginThunkCreator:p.ai})(j)}}]);
//# sourceMappingURL=646.f7558df9.chunk.js.map