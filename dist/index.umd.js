!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("use-measure"),require("react"),require("react-spring")):"function"==typeof define&&define.amd?define(["exports","use-measure","react","react-spring"],r):r(e.reactSpringGrid={},e.useMeasure,e.react,e.reactSpring)}(this,function(e,r,t,i){function n(e){var r=e.renderer,t=e.data,n=e.style,a=i.useSpring({left:e.x+"px",top:e.y+"px"});return react(r,{data:t,style:Object.assign({},n,a)})}r=r&&r.hasOwnProperty("default")?r.default:r,e.Grid=function(e){var a=e.items,s=e.keys,o=e.renderer,p=e.wrapper;void 0===p&&(p="section");var u=e.style,c=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===r.indexOf(i)&&(t[i]=e[i]);return t}(e,["items","keys","renderer","wrapper","style"]),d=i.useTransition(a,s,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),f=t.useRef(null),y=r(f).width,l=a.length||-a[0].width,h=0,g=0;return react(p,Object.assign({},{ref:f,style:Object.assign({},u,{position:"relative"})},c),d.map(function(e,r){var t=e.item;return t.height>g&&(g=t.height),(l+=t.width)+a[r+1].width>y&&(h+=g,g=0),react(n,{key:e.key,renderer:o,data:t,style:e.props,x:l,y:h})}))},e.Item=n});
//# sourceMappingURL=index.umd.js.map
