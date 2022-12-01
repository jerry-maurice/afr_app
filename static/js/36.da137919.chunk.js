"use strict";(self.webpackChunkface_recognition=self.webpackChunkface_recognition||[]).push([[36],{8439:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(885),a=t(2791),o=t(4360),i=t(2892),s=t(6015),c=t(4666),l=t(3811),u=t(4565),d=t(324),h=t(7546),p=t(9952),f=t(2898),m=t(7012),x=t(184),v=(0,o.Z)({palette:{appBar:{main:"#0474BA",contrastText:"#fff"}}});function Z(){var e=a.useState(null),n=(0,r.Z)(e,2),t=n[0],o=n[1],Z=a.useState(null),g=(0,r.Z)(Z,2),b=g[0],j=g[1],k=Boolean(t),w=Boolean(b),y=function(e){o(e.currentTarget)},S=function(){j(null)},C="primary-search-account-menu",W=(0,x.jsx)(h.Z,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:C,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:function(){o(null),S()},children:(0,x.jsx)(d.Z,{onClick:function(){localStorage.removeItem("token")},children:"logout"})}),N="primary-search-account-menu-mobile",G=(0,x.jsx)(h.Z,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:N,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:w,onClose:S,children:(0,x.jsxs)(d.Z,{onClick:y,children:[(0,x.jsx)(l.Z,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,x.jsx)(p.Z,{})}),(0,x.jsx)("p",{children:"Profile"})]})});return(0,x.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,x.jsx)(m.Z,{theme:v,children:(0,x.jsx)(i.Z,{position:"static",color:"appBar",children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(l.Z,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2}}),(0,x.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"\u25c9 AFR"}),(0,x.jsx)(s.Z,{sx:{flexGrow:1}}),(0,x.jsx)(s.Z,{sx:{display:{xs:"none",md:"flex"}},children:(0,x.jsx)(l.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":C,"aria-haspopup":"true",onClick:y,color:"inherit",children:(0,x.jsx)(p.Z,{})})}),(0,x.jsx)(s.Z,{sx:{display:{xs:"flex",md:"none"}},children:(0,x.jsx)(l.Z,{size:"large","aria-label":"show more","aria-controls":N,"aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:(0,x.jsx)(f.Z,{})})})]})})}),G,W]})}},4639:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5671),a=t(3144),o=t(136),i=t(7277),s=t(2791),c=t(3793),l=t(803),u=t(8439),d=t(8687),h=t(7264),p=t(3513),f=t(184),m=function(e){(0,o.Z)(t,e);var n=(0,i.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={columns:[{name:"Name",selector:function(e){return e.studentName},sortable:!0},{name:"Date",selector:function(e){return e.recordedDate},sortable:!0},{name:"Course",selector:function(e){return e.displayCourse},sortable:!0},{name:"Section",selector:function(e){return e.displaySection},sortable:!0},{name:"Status",selector:function(e){return e.status},sortable:!0}]},e.ws=new WebSocket("ws://localhost:5000/ws/attendance/"),e}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props,t=n.section,r=n.authedUser;this.props.dispatch((0,h.Tn)()).then((function(){})),0!==t.name.length&&(this.ws.onopen=function(){console.log("connected"),e.ws.send(JSON.stringify({type:"subscribe",id:Math.floor(5e3*Math.random()),model:"attendance.Attendance",action:"list",view_kwargs:{section:t.id,user:r.id}}))},this.ws.onclose=function(){console.log("closed")},this.ws.onmessage=function(n){console.log(n.data),console.log(JSON.parse(n.data).instance),e.props.dispatch((0,h.RK)(JSON.parse(n.data).instance))})}},{key:"render",value:function(){var e=this.props.attendance;return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)("div",{className:"card",children:(0,f.jsx)("div",{className:"card-header",children:"Monitoring Attendance"})}),(0,f.jsx)("div",{className:"card",children:(0,f.jsx)("div",{className:"card-body",children:(0,f.jsx)(p.ZP,{columns:this.state.columns,data:Object.values(e),pagination:!0})})})]})}}]),t}(s.Component);var x=(0,d.connect)((function(e){return{attendance:e.attendance,section:e.section,authedUser:e.authedUser}}))(m),v=function(e){(0,o.Z)(t,e);var n=(0,i.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"render",value:function(){return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(c.ZP,{}),(0,f.jsx)(u.Z,{}),(0,f.jsx)(l.Z,{fixed:!0,children:(0,f.jsx)(x,{})})]})}}]),t}(s.Component),Z=v},803:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4942),a=t(3366),o=t(7462),i=t(2791),s=t(8182),c=t(7312),l=t(1217),u=t(4419),d=t(7078),h=(0,t(4046).ZP)(),p=t(5080),f=t(184),m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),v=h("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),Z=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x})},g=function(e,n){var t=e.classes,r=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",a&&"disableGutters"]};return(0,u.Z)(i,(function(e){return(0,l.Z)(n,e)}),t)};var b=t(9853),j=t(277),k=t(5513),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?v:n,c=e.useThemeProps,l=void 0===c?Z:c,u=e.componentName,d=void 0===u?"MuiContainer":u,h=t((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,a=n.breakpoints.values[r];return 0!==a&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(a).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),p=i.forwardRef((function(e,n){var t=l(e),r=t.className,i=t.component,c=void 0===i?"div":i,u=t.disableGutters,p=void 0!==u&&u,x=t.fixed,v=void 0!==x&&x,Z=t.maxWidth,b=void 0===Z?"lg":Z,j=(0,a.Z)(t,m),k=(0,o.Z)({},t,{component:c,disableGutters:p,fixed:v,maxWidth:b}),w=g(k,d);return(0,f.jsx)(h,(0,o.Z)({as:c,ownerState:k,className:(0,s.Z)(w.root,r),ref:n},j))}));return p}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,b.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),y=w},3928:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=(t(2791),t(2554)),o=t(184);function i(e){var n=e.styles,t=e.defaultTheme,r=void 0===t?{}:t,i="function"===typeof n?function(e){return n(void 0===(t=e)||null===t||0===Object.keys(t).length?r:e);var t}:n;return(0,o.jsx)(a.xB,{styles:i})}var s=t(4205);var c=function(e){return(0,o.jsx)(i,(0,r.Z)({},e,{defaultTheme:s.Z}))}}}]);
//# sourceMappingURL=36.da137919.chunk.js.map