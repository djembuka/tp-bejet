!function(a){var b,c,d,e="2.21.36",f="slideme",g=["init","animate","arrowClicked","arrowTaped","beforeScrollTo","checkArrows","clearFromClone","createArrows","createNumbers","createPagination","createThumbs","css3Supports","destroy","getBrowser","getInfinitePaginationIndex","getNativeTouchScrollNext","getNext","getNextById","getReadyForNewAnimation","getTotalSlides","inquire","jumpTo","jumpToId","onAnimationEnded","onOrientationchange","onResize","onSnapEnd","onSwipeEnd","onTouchend","onWindowScroll","play","playTo","playToId","redraw","removeAutoslide","resetAutoslide","restoreStartOrder","scrollTo","setAfter","setAutoslide","setBefore","setCurrent","setInfiniteSlides","setNext","setPaginationCurrent","setSibling","setStartOrder","setSwipe","setSwipeEnd","setSwipeMove","setSwipeStart","snapTo","stop","swipeSupport","swipeTo","update"];d=function(a,b){return function(){return a.apply(b,arguments)}},c={arrows:!1,autoslide:!1,autoslideHoverStop:!0,css3:!0,current:0,defaultWrapper:".slideme",direction:1,interval:1e3,itemsForSlide:1,labels:{prev:"prev",next:"next"},loop:!1,nativeTouchScroll:!1,totalSlides:0,onCreatedCallback:"",onEndCallback:"",onInquire:"",onStartCallback:"",pagination:"",ready:!1,resizable:{width:"",height:""},thumbs:{width:50,height:40},transition:"slide",speed:500,swipe:!0},b=function(b){function f(b){this.settings=a.extend({},c,b);for(var e=0,f=g.length;e<f;e++){var h=g[e];this[h]=d(this[h],this)}}return a.extend(f.prototype,{init:function(b){if(this.dom={},this.dom.slideme_container=a(b).addClass("slideme_container"),this.dom.slideme=this.dom.slideme_container.find(this.settings.defaultWrapper),!this.dom.slideme.length)return console.error("Wrapper don't found"),!1;if(this.settings.nativeTouchScroll?(this.settings.swipe=!1,this.dom.slideme.addClass("slideme-touch").on("touchend",this.onTouchend),this.settings.autoslide&&this.dom.slideme.addClass("slideme-touch").on("touchstart",this.removeAutoslide),a(window).on("resize.orientationchange",this.onOrientationchange)):this.dom.slideme.addClass("slideme-"+this.settings.transition),this.settings.itemsForSlide>1)for(var c=this.dom.slideme.children(),d=this.settings.itemsForSlide,e=0,f=c.length;e<f;e+=d)c.slice(e,e+d).wrapAll("<li class='new'/>");if(this.browser=this.getBrowser(),this.counters={current:0,index:0,next:0,total:this.getTotalSlides()},0===this.counters.total?this.dom.slideme_container.addClass("single"):this.counters.total<1&&console.log("At last, one slide is needed!"),this.settings.css3&&!this.css3Supports()&&(this.settings.css3=!1,"zoom"===this.settings.transition&&this.dom.slideme.removeClass("slideme-zoom").addClass("slideme-slide"),console.log("Please, take notice that this browser don't supports css3 transition.")),this.settings.arrows){var g=this.settings.nativeTouchScroll?this.arrowTaped:this.arrowClicked,h=this.createArrows(g);this.dom.arrows=h}this.settings.arrows&&!this.settings.loop&&this.checkArrows(),this.settings.pagination&&this.createPagination(),this.settings.autoslide&&this.settings.autoslideHoverStop&&0!==this.counters.total&&this.dom.slideme_container.on("mouseenter",this.removeAutoslide).on("mouseleave",this.resetAutoslide),this.settings.resizable.width&&this.settings.resizable.height&&(this.resize=a(window).on("resize",this.onResize),this.onResize()),this.settings.onCreatedCallback&&this.settings.onCreatedCallback({instance:this.dom.slideme_container,index:this.counters.current}),this.settings.swipe&&this.swipeSupport()&&(this.swipe={startX:0,startY:0,endX:0,endY:0,deltaX:0,deltaY:0},this.setSwipe()),this.setCurrent(),this.settings.loop&&this.settings.nativeTouchScroll?(this.setStartOrder(),this.setInfiniteSlides()):this.settings.nativeTouchScroll||0===this.counters.total||this.setSibling(),this.working=!1,this.settings.autoslide&&0!==this.counters.total&&this.setAutoslide()},animate:function(a){if(this.counters.current!==this.counters.next)if(this.working=!0,this.animation=1===a.direction?"nextClicked":"prevClicked",this.setNext(),this.settings.onStartCallback&&this.settings.onStartCallback({instance:this.dom.slideme_container,index:this.counters.current,total:this.counters.total,next:this.counters.next}),1===a.direction?this.dom.slideme.children().removeClass("before"):this.dom.slideme.children().removeClass("after"),this.redraw(this.dom.next),this.settings.css3)this.dom.current.one("otransitionend webkitTransitionEnd transitionend",this.onAnimationEnded),this.dom.slideme.addClass(this.animation);else{var b={},c={};switch(this.settings.transition){case"fade":b.opacity=0,c.opacity=1;break;case"page":c.left="0%";break;default:b.left=-100*a.direction+"%",c.left=0}this.dom.current.stop(!0,!1).animate(b,this.speed),this.dom.next.stop(!0,!1).animate(c,this.speed,this.onAnimationEnded)}},arrowClicked:function(a){if(!this.working){var b=a.data.direction;this.counters.next=this.getNext(b),this.animate({direction:b}),this.settings.swipe&&this.swipeSupport()&&this.settings.autoslide&&this.removeAutoslide(),a.preventDefault()}},arrowTaped:function(a){if(!this.working){var b,c=a.data.direction;this.settings.loop?(this.counters.index=this.counters.index+c,b=this.counters.current+c):b=this.getNext(c),this.settings.autoslide&&this.removeAutoslide(),this.scrollTo(b),a.preventDefault()}},beforeScrollTo:function(a){if(this.settings.loop){var b=this.getInfinitePaginationIndex();this.clearFromClone(b),this.restoreStartOrder(b),this.counters.index=a.data.index}this.settings.autoslide&&this.removeAutoslide(),this.scrollTo(a)},checkArrows:function(){this.counters.current===this.counters.total?this.dom.arrows.next.attr({disabled:"disabled"}):this.dom.arrows.next.removeAttr("disabled"),0===this.counters.current?this.dom.arrows.prev.attr({disabled:"disabled"}):this.dom.arrows.prev.removeAttr("disabled")},clearFromClone:function(){this.dom.slideme.children().removeClass("original").filter(".clone").remove();var a=this.dom.current.position().left+this.dom.slideme.scrollLeft();this.dom.slideme.scrollLeft(a)},createArrows:function(b){var c={};for(var d in this.settings.labels){var e={direction:"next"===d?1:-1,key:d},f=a('<button class="arrow" />').addClass(d).html(this.settings.labels[d]).on("click",e,b);c[d]=f,this.dom.slideme_container.append(c[d])}return c},createNumbers:function(b){for(var c=[],d=0,e=this.counters.total;d<=e;d++){var f={index:d},g=a("<li/>").text(d+1).on("click",f,b);c.push(g)}return c},createPagination:function(b){if(this.dom.slideme_pagination=a('<nav class="pagination"/>'),"numbers"===this.settings.pagination||"both"===this.settings.pagination){var c=a('<ol class="numbers" />');b=this.settings.nativeTouchScroll?this.beforeScrollTo:this.playTo;var d=this.createNumbers(b);c.append(d.slice()),this.dom.slideme_pagination.append(c)}if("thumbs"===this.settings.pagination||"both"===this.settings.pagination){var e=a('<ol class="thumbs" />');b=this.settings.nativeTouchScroll?this.beforeScrollTo:this.playTo;var f=this.createThumbs(b);e.append(f.slice()),this.dom.slideme_pagination.append(e)}this.dom.slideme_container.append(this.dom.slideme_pagination),this.setPaginationCurrent(this.counters.current)},createThumbs:function(b){var c=[],d=this.settings.thumbs.width,e=this.settings.thumbs.height;return this.dom.slideme.find(">*").each(function(f){var g={index:f},h=a(this).find("img").eq(0).attr("src"),i=a("<img />").attr({src:h,width:d,height:e}),j=a("<li/>").html(i).on("click",g,b);c.push(j)}),c},css3Supports:function(){var a=document.body||document.documentElement,b=a.style,c="transition";if("string"==typeof b[c])return!0;var d=["Moz","Webkit","Khtml","O","ms"];c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0,f=d.length;e<f;e++)if("string"==typeof b[d[e]+c])return!0;return!1},destroy:function(){this.dom.slideme_container.removeClass("slideme_container single").removeData(),this.dom.slideme.removeClass("slideme-"+this.settings.transition),this.settings.pagination&&this.dom.slideme_pagination.remove(),this.settings.arrows&&(this.dom.arrows.next.prev(),this.dom.arrows.next.remove()),this.settings.resizable.width&&this.settings.resizable.height&&(this.dom.slideme.css({height:"auto"}),this.resize=null),this.settings.autoslide&&this.removeAutoslide()},getBrowser:function(){var a=navigator.userAgent;switch(!0){case a.lastIndexOf("MSIE")>0:return"MSIE";case a.lastIndexOf("Chrome")>0:return"Chrome";case a.lastIndexOf("Firefox")>0:return"Firefox";case a.lastIndexOf("Safari")>0:return"Safari";default:return""}},getInfinitePaginationIndex:function(){return this.counters.index>=0&&this.counters.index<=this.counters.total||this.counters.index<0&&this.counters.index>=-this.counters.total?this.counters.index:this.counters.index%(this.counters.total+1)},getNext:function(a){var b=this.counters.current+a;switch(!0){case b>this.counters.total&&this.settings.loop:b=0;break;case b<0&&this.settings.loop:b=this.counters.total;break;case b>this.counters.total&&!this.settings.loop||b<0&&!this.settings.loop:b=this.counters.current}return b},getNextById:function(a){return this.dom.slideme.find(a).index()},getReadyForNewAnimation:function(){if(this.dom.slideme.children().removeClass("current next after before"),this.settings.nativeTouchScroll?this.settings.nativeTouchScroll&&!this.settings.loop?this.setCurrent():this.settings.nativeTouchScroll&&this.settings.loop&&(this.setCurrent(),this.setInfiniteSlides()):(this.counters.current=this.counters.next,this.setCurrent(),this.setSibling()),!this.settings.loop&&this.settings.arrows&&this.checkArrows(),this.settings.pagination&&this.settings.nativeTouchScroll&&this.settings.loop){var a=this.getInfinitePaginationIndex();this.setPaginationCurrent(a)}else this.settings.pagination&&this.setPaginationCurrent(this.counters.current);this.settings.onEndCallback&&this.settings.onEndCallback({instance:this.dom.slideme_container,index:this.counters.current,total:this.counters.total}),this.working=!1,(this.settings.autoslide&&!this.pause||this.settings.autoslide&&this.settings.swipe&&this.swipeSupport())&&this.setAutoslide()},getTotalSlides:function(){return this.dom.slideme.children().length-1},inquire:function(){this.settings.onInquire?this.settings.onInquire({instance:this.dom.slideme_container,index:this.counters.current,total:this.counters.total,version:e}):console.log("Please, take notice that onInquire callback function must exist.")},jumpTo:function(a){clearTimeout(this.timer),this.counters.next=a,this.getReadyForNewAnimation()},jumpToId:function(a){clearTimeout(this.timer);var b=this.getNextById(a);this.counters.next=b,this.getReadyForNewAnimation()},onAnimationEnded:function(a){this.settings.css3?(this.dom.current.off("otransitionend webkitTransitionEnd transitionend"),this.dom.slideme.removeClass(this.animation)):this.dom.slideme.children().removeAttr("style"),this.getReadyForNewAnimation()},onOrientationchange:function(){this.settings.autoslide&&this.removeAutoslide(),this.scrollTo(this.counters.current)},onResize:function(){var a=this.settings.resizable.width,b=this.settings.resizable.height,c=Math.round(b*this.dom.slideme.width()/a);this.dom.slideme.css({height:c})},onTouchend:function(a){if(!this.working){var b=a.currentTarget.scrollLeft,c=Math.round(this.dom.current.width()/1.3),d=this.dom.current.next(),e=this.dom.current.prev(),f=d.length?Math.abs(d.position().left+b):0,g=e.length?Math.abs(e.position().left+b):0,h=Math.abs(this.dom.current.position().left+b);b>=f-c&&(this.settings.loop||!this.settings.loop&&this.counters.current!==this.counters.total)?(this.counters.current=this.counters.current+1,this.counters.index=this.counters.index+1,b=f):b<=g+c&&(this.settings.loop||!this.settings.loop&&0!==this.counters.current)?(this.counters.current=this.counters.current-1,this.counters.index=this.counters.index-1,b=g):b=h,this.working=!0,this.dom.slideme.addClass("snapping"),this.redraw(this.dom.slideme),this.snapTo(b)}},onSnapEnd:function(a){this.dom.slideme.removeClass("snapping"),this.pause=!1,this.getReadyForNewAnimation()},onSwipeEnd:function(a){this.settings.autoslide&&this.setAutoslide()},onWindowScroll:function(a){this.working&&(this.onAnimationEnded(),a.preventDefault())},play:function(a){this.pause=!1,this.setAutoslide()},playTo:function(a){var b=void 0!==a.data?a.data.index:a;if(!this.working&&b!==this.counters.current&&b<=this.counters.total){var c=b>this.counters.current?1:-1;c>0?this.setAfter(b):this.setBefore(b),this.counters.next=b,this.settings.autoslide&&clearTimeout(this.timer),this.settings.nativeTouchScroll?this.scrollTo(b):this.animate({direction:c})}},playToId:function(a){var b=this.getNextById(a);this.playTo(b),this.settings.autoslide&&clearTimeout(this.timer)},redraw:function(a){a.each(function(){this.offsetHeight})},removeAutoslide:function(){this.pause=!0,clearTimeout(this.timer)},resetAutoslide:function(){this.pause=!1,this.setAutoslide()},restoreStartOrder:function(b){var c,d=this.dom.slideme.children().detach();d.sort(function(b,c){return a(b).data("index")>a(c).data("index")?1:-1}),this.counters.index=this.counters.current,this.dom.slideme.append(d),c=this.dom.slideme.children().eq(b).position().left+this.dom.slideme.scrollLeft(),this.dom.slideme.scrollLeft(c)},scrollTo:function(a){var b=void 0!==a.data?a.data.index:a,c=this.dom.slideme.children().eq(b).position().left+this.dom.slideme.scrollLeft();this.counters.current=b,this.settings.onStartCallback&&this.settings.onStartCallback({instance:this.dom.slideme_container,index:this.counters.current,total:this.counters.total,next:this.counters.current}),this.snapTo(c)},setAfter:function(a){var b=this.dom.slideme.children().removeClass("after before").eq(a).addClass("after");this.redraw(b)},setAutoslide:function(){if(!this.working&&(this.settings.loop||!this.settings.loop&&(this.counters.current!==this.counters.total&&1===this.settings.direction||0!==this.counters.current&&-1===this.settings.direction))){var a=this.settings.direction,b=this.settings.interval,c=this.settings.nativeTouchScroll?this.scrollTo:this.animate;if(this.pause=!1,this.counters.next=this.getNext(a),this.settings.nativeTouchScroll){var d=this.settings.loop?this.counters.current+a:this.getNext(a);this.timer=setTimeout(function(){c(d)},b)}else this.timer=setTimeout(function(){c({direction:a})},b)}},setBefore:function(a){var b=this.dom.slideme.children().removeClass("after before").eq(a).addClass("before");this.redraw(b)},setCurrent:function(){this.dom.current=this.dom.slideme.children().eq(this.counters.current).addClass("current"),this.redraw(this.dom.current)},setInfiniteSlides:function(){var a;if(1!==this.counters.total)this.dom.current.next().length?this.dom.current.prev().length||(a=this.dom.slideme.children(":last-child").detach(),this.counters.current=this.counters.current+1,this.dom.slideme.prepend(a)):(a=this.dom.slideme.children(":first-child").detach(),this.counters.current=this.counters.current-1,this.dom.slideme.append(a));else{var b=this.dom.slideme.children().filter(".clone"),c=this.dom.slideme.children().filter(".original");b.is(".current")&&(c.addClass("current"),this.dom.current=c),b.length&&(c.removeClass("original"),b.removeClass("clone current").remove()),c=this.dom.slideme.children().filter(':not(".current")'),b=c.clone().addClass("clone"),c.addClass("original"),this.counters.current=1,this.dom.current.next().length?this.dom.current.prev().length||this.dom.slideme.prepend(b):this.dom.slideme.append(b)}var d=this.dom.slideme.children().eq(this.counters.current).position().left+this.dom.slideme.scrollLeft();this.dom.slideme.scrollLeft(d)},setNext:function(){this.dom.next=this.dom.slideme.children().eq(this.counters.next).addClass("next"),this.redraw(this.dom.next)},setPaginationCurrent:function(a){this.dom.slideme_pagination.find("li").removeClass("current"),this.dom.slideme_pagination.find("ol.numbers li").eq(a).addClass("current"),this.dom.slideme_pagination.find("ol.thumbs li").eq(a).addClass("current")},setSibling:function(){var a=this.counters.current+1>this.counters.total?0:this.counters.current+1,b=this.counters.current-1;this.dom.after=this.dom.slideme.children().eq(a).addClass("after"),this.dom.before=this.dom.slideme.children().eq(b).addClass("before")},setStartOrder:function(){var b=this.dom.slideme.children();a.each(b,function(b){a(this).data("index",b)})},setSwipe:function(){this.dom.slideme.on("touchstart",this.setSwipeStart),this.dom.slideme.on("touchmove",this.setSwipeMove),this.dom.slideme.on("touchend",this.setSwipeEnd),"Safari"===this.browser&&this.settings.css3&&a(window).on("scroll",this.onWindowScroll)},setSwipeEnd:function(){this.pause&&!this.working&&this.swipeTo()},setSwipeMove:function(a){var b=a.originalEvent.touches[0];this.pause&&!this.working&&b&&(this.swipe.deltaX=this.swipe.startX-b.pageX,this.swipe.deltaY=this.swipe.startY-b.pageY,Math.abs(this.swipe.deltaX)>30&&a.preventDefault())},setSwipeStart:function(a){var b=a.originalEvent.touches[0];this.pause||this.working||!b||(this.pause=!0,this.swipe.deltaX=0,this.swipe.deltaY=0,this.swipe.startX=b.pageX,this.swipe.startY=b.pageY,this.settings.autoslide&&this.removeAutoslide())},snapTo:function(a){var b=Math.round(350+Math.abs(10*(this.counters.next-this.counters.current)));this.dom.slideme.stop(!0,!1).animate({scrollLeft:a},b,this.onSnapEnd)},stop:function(){this.pause=!0,this.removeAutoslide()},swipeSupport:function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0},swipeTo:function(a,b){if(!this.working&&Math.abs(this.swipe.deltaX)>30&&Math.abs(this.swipe.deltaY)<75){this.working=!0,this.pause=!1;var c=this.swipe.deltaX>0?1:-1;this.counters.next=this.getNext(c),this.animate({direction:c})}else!this.working&&this.pause&&this.resetAutoslide()},update:function(){this.counters.total=this.getTotalSlides(),this.settings.pagination&&(this.dom.slideme_pagination.remove(),this.createPagination()),!this.settings.loop&&this.settings.arrows&&this.checkArrows()}}),f}(),a.fn[f]=function(c){return this.each(function(){if(this.instance||-1!==a.inArray(c,g))if(this.instance&&-1!==a.inArray(c,g))switch(c){case"destroy":this.instance.destroy(),delete this.instance;break;default:this.instance[c](arguments[1])}else{if(!this.instance||-1!==a.inArray(c,g))return!1;this.instance.update()}else this.instance=new b(c||{}),this.instance.init(this);return this},arguments)}}(jQuery);