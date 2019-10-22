(this["webpackJsonpxe-app"]=this["webpackJsonpxe-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.38f20377.png"},21:function(e,t,a){e.exports=a(70)},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(17),c=a.n(i),r=(a(26),a(27),a(28),a(29),a(3)),s=a(4),l=a(6),h=a(5),u=a(7),d=a(18),m=a.n(d),p=(a(30),a(31),a(19)),g=a.n(p),v=a(20),b=a.n(v),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={keyTimer:null,locations:[],loading:!1,searchValue:"",enableSearch:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state;return o.a.createElement("div",{className:"search"},o.a.createElement("span",null,this.props.label),o.a.createElement("input",{value:t.searchValue,onChange:function(t){e.handleInput(t)},placeholder:"Search"}),o.a.createElement("ul",{style:{display:t.locations.length||t.loading>0?"block":"none"}},o.a.createElement(b.a,{className:"search-loader",visible:t.loading,type:"ThreeDots",color:"#00BFFF",height:50,width:50}),t.locations.map((function(t){return o.a.createElement("li",{onClick:function(t){e.handleLocationClick(t)},key:e.generateId()},t.name)}))),o.a.createElement("button",{disabled:!t.enableSearch,className:"btn btn-primary",onClick:function(t){return e.handleSearchClick(t)}},"Click to search"))}},{key:"handleInput",value:function(e){var t=this;clearTimeout(this.state.keyTimer);var a=e.target.value;if(this.setState({searchValue:a}),a){var n=setInterval((function(){clearTimeout(t.state.keyTimer),t.loadFromCache(a)}),this.props.typingTimeout);this.setState({keyTimer:n})}else this.setState({locations:[],enableSearch:!1})}},{key:"loadFromCache",value:function(e){var t=this.props.cacheName,a=JSON.parse(localStorage.getItem(t))||{};e in a?Date.now()-a[e].timestamp>this.props.cacheExpiration?this.requestLocations(e):(this.setState({locations:a[e].locations}),console.log("Served from cache!")):this.requestLocations(e)}},{key:"storeToCache",value:function(e,t){var a=this.props.cacheName,n=JSON.parse(localStorage.getItem(a))||{};n[e]={locations:t,timestamp:Date.now()},localStorage.setItem(a,JSON.stringify(n))}},{key:"requestLocations",value:function(e){var t=this.props.dataUrl,a=this.props.language;e.length>=2&&(this.setState({loading:!0}),g.a.get("".concat(t,"?keywords=").concat(e,"&language=").concat(a)).then(function(e,t){var a=t.data.entries;this.setState({locations:a,loading:!1}),this.storeToCache(e,a)}.bind(this,e)).catch((function(e){console.error(e)})))}},{key:"handleLocationClick",value:function(e){var t=e.target.innerText;this.setState({searchValue:t,enableSearch:!0})}},{key:"handleSearchClick",value:function(){window.open("https://www.google.com.tr/search?q=".concat(this.state.searchValue))}},{key:"generateId",value:function(){return Math.random().toString(36).substr(2,9)}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={device:a.getDevice(),language:a.getLanguage()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(t){e.handleResize(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:this.getClass()},o.a.createElement("div",{style:{display:"desktop"===this.state.device?"block":"none"},className:"home-banner-desktop"},o.a.createElement("span",{className:"home-banner-span"},"Banner Space")),o.a.createElement("img",{className:"app-logo",src:m.a,alt:"logo"}),o.a.createElement(f,{dataUrl:"http://35.180.182.8/search",typingTimeout:1e3,label:"What place are you looking for?",language:this.state.language,cacheName:"xe-app-queries",cacheExpiration:3e5}),o.a.createElement("div",{style:{display:"tablet"===this.state.device?"block":"none"},className:"home-banner-tablet"},o.a.createElement("span",{className:"home-banner-span"},"Banner Space")))}},{key:"handleResize",value:function(e){this.setState({device:this.getDevice()})}},{key:"getDevice",value:function(){var e=window.innerWidth,t=window.mobileWidth,a=window.tabletWidth;return t<e&&e<=a?"tablet":e<=t?"mobile":"desktop"}},{key:"getClass",value:function(){switch(this.state.device){case"desktop":return"home-desktop";case"tablet":return"home-tablet";case"mobile":return"home-mobile";default:return"home-desktop"}}},{key:"getLanguage",value:function(){var e=navigator.language;return e.includes("el")?"el":(e.includes("en"),"en")}}]),t}(n.Component);var y=function(){return window.mobileWidth=640,window.tabletWidth=1024,o.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.be289316.chunk.js.map