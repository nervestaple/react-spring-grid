function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("use-measure")),r=require("react"),n=e(r),i=require("react-spring");function a(e){var t=e.renderer,r=e.data,a=e.style,s=i.useSpring({left:e.x+"px",top:e.y+"px"});return n.createElement(t,{data:r,style:Object.assign({},a,s)})}exports.Grid=function(e){var s=e.items,o=e.keys,p=e.renderer,u=e.wrapper;void 0===u&&(u="section");var c=e.style,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["items","keys","renderer","wrapper","style"]),y=i.useTransition(s,o,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),d=r.useRef(null),f=t(d).width,h=s.length||-s[0].width,m=0,v=0;return n.createElement(u,Object.assign({ref:d,style:Object.assign({},c,{position:"relative"})},l),y.map(function(e,t){var r=e.item;return h+=r.width,r.height>v&&(v=r.height),t+1<s.length&&h+s[t+1].width>f&&(m+=v,v=0),n.createElement(a,{key:e.key,renderer:p,data:r,style:e.props,x:h,y:m})}))},exports.Item=a;
//# sourceMappingURL=index.js.map
