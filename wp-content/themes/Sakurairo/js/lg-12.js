(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[3321],{9004:function(e){var t,o,i,s,a,n,r,l,g,c,h;e.exports=(t=function(){return(t=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},o={scale:1,zoom:!0,infiniteZoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},i="lgContainerResize",s="lgBeforeOpen",a="lgAfterOpen",n="lgSlideItemLoad",r="lgAfterSlide",l="lgRotateLeft",g="lgRotateRight",c="lgFlipHorizontal",h="lgFlipVertical",function(){function e(e,i){return this.core=e,this.$LG=i,this.settings=t(t({},o),this.core.settings),this}return e.prototype.buildTemplates=function(){var e=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(e+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(e)},e.prototype.enableZoom=function(e){var t=this,o=this.settings.enableZoomAfter+e.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&e.detail.delay?o=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout((function(){t.isImageSlide(t.core.index)&&(t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"),e.detail.index===t.core.index&&t.setZoomEssentials())}),o+30)},e.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(n+".zoom",this.enableZoom.bind(this))},e.prototype.getDragCords=function(e){return{x:e.pageX,y:e.pageY}},e.prototype.getSwipeCords=function(e){return{x:e.touches[0].pageX,y:e.touches[0].pageY}},e.prototype.getDragAllowedAxises=function(e,t){var o=this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),i=0,s=0,a=o.getBoundingClientRect();e?(i=o.offsetHeight*e,s=o.offsetWidth*e):t?(i=a.height+t*a.height,s=a.width+t*a.width):(i=a.height,s=a.width);var n=i>this.containerRect.height;return{allowX:s>this.containerRect.width,allowY:n}},e.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()},e.prototype.zoomImage=function(e,t,o,i){if(!(Math.abs(t)<=0)){var s,a,n=this.containerRect.width/2+this.containerRect.left,r=this.containerRect.height/2+this.containerRect.top+this.scrollTop;1===e&&(this.positionChanged=!1);var l=this.getDragAllowedAxises(0,t),g=l.allowY,c=l.allowX;this.positionChanged&&(s=this.left/(this.scale-t),a=this.top/(this.scale-t),this.pageX=n-s,this.pageY=r-a,this.positionChanged=!1);var h,m,u=this.getPossibleSwipeDragCords(t),d=n-this.pageX,p=r-this.pageY;if(e-t>1){var f=(e-t)/Math.abs(t);h=(d=(t<0?-d:d)+this.left*(f+(t<0?-1:1)))/f,m=(p=(t<0?-p:p)+this.top*(f+(t<0?-1:1)))/f}else h=d*(f=(e-t)*t),m=p*f;o&&(c?this.isBeyondPossibleLeft(h,u.minX)?h=u.minX:this.isBeyondPossibleRight(h,u.maxX)&&(h=u.maxX):e>1&&(h<u.minX?h=u.minX:h>u.maxX&&(h=u.maxX)),g?this.isBeyondPossibleTop(m,u.minY)?m=u.minY:this.isBeyondPossibleBottom(m,u.maxY)&&(m=u.maxY):e>1&&(m<u.minY?m=u.minY:m>u.maxY&&(m=u.maxY))),this.setZoomStyles({x:h,y:m,scale:e}),this.left=h,this.top=m,i&&this.setZoomImageSize()}},e.prototype.resetImageTranslate=function(e){if(this.isImageSlide(e)){var t=this.core.getSlideItem(e).find(".lg-image").first();this.imageReset=!1,t.removeClass("reset-transition reset-transition-y reset-transition-x"),this.core.outer.removeClass("lg-actual-size"),t.css("width","auto").css("height","auto"),setTimeout((function(){t.removeClass("no-transition")}),10)}},e.prototype.setZoomImageSize=function(){var e=this,t=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout((function(){var o=e.getCurrentImageActualSizeScale();e.scale>=o&&(t.addClass("no-transition"),e.imageReset=!0)}),500),setTimeout((function(){var o=e.getCurrentImageActualSizeScale();if(e.scale>=o){var i=e.getDragAllowedAxises(e.scale);t.css("width",t.get().naturalWidth+"px").css("height",t.get().naturalHeight+"px"),e.core.outer.addClass("lg-actual-size"),i.allowX&&i.allowY?t.addClass("reset-transition"):i.allowX&&!i.allowY?t.addClass("reset-transition-x"):!i.allowX&&i.allowY&&t.addClass("reset-transition-y")}}),550)},e.prototype.setZoomStyles=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),o=this.core.getSlideItem(this.core.index).find(".lg-image").first(),i=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=e.scale,o.css("transform","scale3d("+e.scale+", "+e.scale+", 1)"),i.css("transform","scale3d("+e.scale+", "+e.scale+", 1)");var s="translate3d("+e.x+"px, "+e.y+"px, 0)";t.css("transform",s)},e.prototype.setActualSize=function(e,t){var o=this;if(!this.zoomInProgress){this.zoomInProgress=!0;var i=this.core.galleryItems[this.core.index];this.resetImageTranslate(e),setTimeout((function(){if(i.src&&!o.core.outer.hasClass("lg-first-slide-loading")){var e=o.getCurrentImageActualSizeScale(),s=o.scale;o.core.outer.hasClass("lg-zoomed")?o.scale=1:o.scale=o.getScale(e),o.setPageCords(t),o.beginZoom(o.scale),o.zoomImage(o.scale,o.scale-s,!0,!0)}}),50),setTimeout((function(){o.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}),60),setTimeout((function(){o.zoomInProgress=!1}),610)}},e.prototype.getNaturalWidth=function(e){var t=this.core.getSlideItem(e).find(".lg-image").first(),o=this.core.galleryItems[e].width;return o?parseFloat(o):t.get().naturalWidth},e.prototype.getActualSizeScale=function(e,t){return e>=t?e/t||2:1},e.prototype.getCurrentImageActualSizeScale=function(){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,t=this.getNaturalWidth(this.core.index)||e;return this.getActualSizeScale(t,e)},e.prototype.getPageCords=function(e){var t={};if(e)t.x=e.pageX||e.touches[0].pageX,t.y=e.pageY||e.touches[0].pageY;else{var o=this.core.$content.get().getBoundingClientRect();t.x=o.width/2+o.left,t.y=o.height/2+this.scrollTop+o.top}return t},e.prototype.setPageCords=function(e){var t=this.getPageCords(e);this.pageX=t.x,this.pageY=t.y},e.prototype.manageActualPixelClassNames=function(){this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)},e.prototype.beginZoom=function(e){return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),e>1?(this.core.outer.addClass("lg-zoomed"),this.manageActualPixelClassNames()):this.resetZoom(),e>1},e.prototype.getScale=function(e){var t=this.getCurrentImageActualSizeScale();return e<1?e=1:e>t&&(e=t),e},e.prototype.init=function(){var e=this;if(this.settings.zoom){this.buildTemplates(),this.enableZoomOnSlideItemLoad();var t=null;this.core.outer.on("dblclick.lg",(function(t){e.$LG(t.target).hasClass("lg-image")&&e.setActualSize(e.core.index,t)})),this.core.outer.on("touchstart.lg",(function(o){var i=e.$LG(o.target);1===o.touches.length&&i.hasClass("lg-image")&&(t?(clearTimeout(t),t=null,o.preventDefault(),e.setActualSize(e.core.index,o)):t=setTimeout((function(){t=null}),300))})),this.core.LGel.on(i+".zoom "+g+".zoom "+l+".zoom "+c+".zoom "+h+".zoom",(function(){if(e.core.lgOpened&&e.isImageSlide(e.core.index)&&!e.core.touchAction){var t=e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first();e.top=0,e.left=0,e.setZoomEssentials(),e.setZoomSwipeStyles(t,{x:0,y:0}),e.positionChanged=!0}})),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,(function(){e.core.lgOpened&&(e.scrollTop=e.$LG(window).scrollTop())})),this.core.getElementById("lg-zoom-out").on("click.lg",(function(){if(e.isImageSlide(e.core.index)){var t=0;e.imageReset&&(e.resetImageTranslate(e.core.index),t=50),setTimeout((function(){var t=e.scale-e.settings.scale;t<1&&(t=1),e.beginZoom(t),e.zoomImage(t,-e.settings.scale,!0,!e.settings.infiniteZoom)}),t)}})),this.core.getElementById("lg-zoom-in").on("click.lg",(function(){e.zoomIn()})),this.core.getElementById("lg-actual-size").on("click.lg",(function(){e.setActualSize(e.core.index)})),this.core.LGel.on(s+".zoom",(function(){e.core.outer.find(".lg-item").removeClass("lg-zoomable")})),this.core.LGel.on(a+".zoom",(function(){e.scrollTop=e.$LG(window).scrollTop(),e.pageX=e.core.outer.width()/2,e.pageY=e.core.outer.height()/2+e.scrollTop,e.scale=1})),this.core.LGel.on(r+".zoom",(function(t){var o=t.detail.prevIndex;e.scale=1,e.positionChanged=!1,e.zoomInProgress=!1,e.resetZoom(o),e.resetImageTranslate(o),e.isImageSlide(e.core.index)&&e.setZoomEssentials()})),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1,this.zoomInProgress=!1}},e.prototype.zoomIn=function(){if(this.isImageSlide(this.core.index)){var e=this.scale+this.settings.scale;this.settings.infiniteZoom||(e=this.getScale(e)),this.beginZoom(e),this.zoomImage(e,Math.min(this.settings.scale,e-this.scale),!0,!this.settings.infiniteZoom)}},e.prototype.resetZoom=function(e){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var t=this.core.getElementById("lg-actual-size"),o=this.core.getSlideItem(void 0!==e?e:this.core.index);t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),o.find(".lg-img-wrap").first().removeAttr("style"),o.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},e.prototype.getTouchDistance=function(e){return Math.sqrt((e.touches[0].pageX-e.touches[1].pageX)*(e.touches[0].pageX-e.touches[1].pageX)+(e.touches[0].pageY-e.touches[1].pageY)*(e.touches[0].pageY-e.touches[1].pageY))},e.prototype.pinchZoom=function(){var e=this,t=0,o=!1,i=1,s=0,a=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",(function(o){if(a=e.core.getSlideItem(e.core.index),e.isImageSlide(e.core.index)&&2===o.touches.length){if(o.preventDefault(),e.core.outer.hasClass("lg-first-slide-loading"))return;i=e.scale||1,e.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),e.setPageCords(o),e.resetImageTranslate(e.core.index),e.core.touchAction="pinch",t=e.getTouchDistance(o)}})),this.core.$inner.on("touchmove.lg",(function(n){if(2===n.touches.length&&"pinch"===e.core.touchAction&&(e.$LG(n.target).hasClass("lg-item")||a.get().contains(n.target))){n.preventDefault();var r=e.getTouchDistance(n),l=t-r;if(!o&&Math.abs(l)>5&&(o=!0),o){s=e.scale;var g=Math.max(1,i+.02*-l);e.scale=Math.round(100*(g+Number.EPSILON))/100;var c=e.scale-s;e.zoomImage(e.scale,Math.round(100*(c+Number.EPSILON))/100,!1,!1)}}})),this.core.$inner.on("touchend.lg",(function(i){if("pinch"===e.core.touchAction&&(e.$LG(i.target).hasClass("lg-item")||a.get().contains(i.target))){if(o=!1,t=0,e.scale<=1)e.resetZoom();else{var s=e.getCurrentImageActualSizeScale();if(e.scale>=s){var n=s-e.scale;0===n&&(n=.01),e.zoomImage(s,n,!1,!0)}e.manageActualPixelClassNames(),e.core.outer.addClass("lg-zoomed")}e.core.touchAction=void 0}}))},e.prototype.touchendZoom=function(e,t,o,i,s){var a=t.x-e.x,n=t.y-e.y,r=Math.abs(a)/s+1,l=Math.abs(n)/s+1;r>2&&(r+=1),l>2&&(l+=1),a*=r,n*=l;var g=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),c={};c.x=this.left+a,c.y=this.top+n;var h=this.getPossibleSwipeDragCords();(Math.abs(a)>15||Math.abs(n)>15)&&(i&&(this.isBeyondPossibleTop(c.y,h.minY)?c.y=h.minY:this.isBeyondPossibleBottom(c.y,h.maxY)&&(c.y=h.maxY)),o&&(this.isBeyondPossibleLeft(c.x,h.minX)?c.x=h.minX:this.isBeyondPossibleRight(c.x,h.maxX)&&(c.x=h.maxX)),i?this.top=c.y:c.y=this.top,o?this.left=c.x:c.x=this.left,this.setZoomSwipeStyles(g,c),this.positionChanged=!0)},e.prototype.getZoomSwipeCords=function(e,t,o,i,s){var a={};if(i){if(a.y=this.top+(t.y-e.y),this.isBeyondPossibleTop(a.y,s.minY)){var n=s.minY-a.y;a.y=s.minY-n/6}else if(this.isBeyondPossibleBottom(a.y,s.maxY)){var r=a.y-s.maxY;a.y=s.maxY+r/6}}else a.y=this.top;if(o){if(a.x=this.left+(t.x-e.x),this.isBeyondPossibleLeft(a.x,s.minX)){var l=s.minX-a.x;a.x=s.minX-l/6}else if(this.isBeyondPossibleRight(a.x,s.maxX)){var g=a.x-s.maxX;a.x=s.maxX+g/6}}else a.x=this.left;return a},e.prototype.isBeyondPossibleLeft=function(e,t){return e>=t},e.prototype.isBeyondPossibleRight=function(e,t){return e<=t},e.prototype.isBeyondPossibleTop=function(e,t){return e>=t},e.prototype.isBeyondPossibleBottom=function(e,t){return e<=t},e.prototype.isImageSlide=function(e){var t=this.core.galleryItems[e];return"image"===this.core.getSlideType(t)},e.prototype.getPossibleSwipeDragCords=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first(),o=this.core.mediaContainerPosition.bottom,i=t.get().getBoundingClientRect(),s=i.height,a=i.width;return e&&(s+=e*s,a+=e*a),{minY:(s-this.containerRect.height)/2,maxY:(this.containerRect.height-s)/2+o,minX:(a-this.containerRect.width)/2,maxX:(this.containerRect.width-a)/2}},e.prototype.setZoomSwipeStyles=function(e,t){e.css("transform","translate3d("+t.x+"px, "+t.y+"px, 0)")},e.prototype.zoomSwipe=function(){var e,t,o=this,i={},s={},a=!1,n=!1,r=!1,l=new Date,g=(new Date,this.core.getSlideItem(this.core.index));this.core.$inner.on("touchstart.lg",(function(s){if(o.isImageSlide(o.core.index)&&(g=o.core.getSlideItem(o.core.index),(o.$LG(s.target).hasClass("lg-item")||g.get().contains(s.target))&&1===s.touches.length&&o.core.outer.hasClass("lg-zoomed"))){s.preventDefault(),l=new Date,o.core.touchAction="zoomSwipe",t=o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();var a=o.getDragAllowedAxises(0);r=a.allowY,((n=a.allowX)||r)&&(i=o.getSwipeCords(s)),e=o.getPossibleSwipeDragCords(),o.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}})),this.core.$inner.on("touchmove.lg",(function(l){if(1===l.touches.length&&"zoomSwipe"===o.core.touchAction&&(o.$LG(l.target).hasClass("lg-item")||g.get().contains(l.target))){l.preventDefault(),o.core.touchAction="zoomSwipe",s=o.getSwipeCords(l);var c=o.getZoomSwipeCords(i,s,n,r,e);(Math.abs(s.x-i.x)>15||Math.abs(s.y-i.y)>15)&&(a=!0,o.setZoomSwipeStyles(t,c))}})),this.core.$inner.on("touchend.lg",(function(e){if("zoomSwipe"===o.core.touchAction&&(o.$LG(e.target).hasClass("lg-item")||g.get().contains(e.target))){if(e.preventDefault(),o.core.touchAction=void 0,o.core.outer.removeClass("lg-zoom-dragging"),!a)return;a=!1;var t=(new Date).valueOf()-l.valueOf();o.touchendZoom(i,s,n,r,t)}}))},e.prototype.zoomDrag=function(){var e,t,o,i,s=this,a={},n={},r=!1,l=!1,g=!1,c=!1;this.core.outer.on("mousedown.lg.zoom",(function(t){if(s.isImageSlide(s.core.index)){var n=s.core.getSlideItem(s.core.index);if(s.$LG(t.target).hasClass("lg-item")||n.get().contains(t.target)){e=new Date,i=s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first();var l=s.getDragAllowedAxises(0);c=l.allowY,g=l.allowX,s.core.outer.hasClass("lg-zoomed")&&s.$LG(t.target).hasClass("lg-object")&&(g||c)&&(t.preventDefault(),a=s.getDragCords(t),o=s.getPossibleSwipeDragCords(),r=!0,s.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))}}})),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,(function(e){if(r){l=!0,n=s.getDragCords(e);var t=s.getZoomSwipeCords(a,n,g,c,o);s.setZoomSwipeStyles(i,t)}})),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,(function(o){if(r){if(t=new Date,r=!1,s.core.outer.removeClass("lg-zoom-dragging"),l&&(a.x!==n.x||a.y!==n.y)){n=s.getDragCords(o);var i=t.valueOf()-e.valueOf();s.touchendZoom(a,n,g,c,i)}l=!1}s.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}))},e.prototype.closeGallery=function(){this.resetZoom(),this.zoomInProgress=!1},e.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},e}())}}]);
//# sourceMappingURL=lg-12.js.map