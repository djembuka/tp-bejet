!function(a){"use strict";a(function(){function b(b){var c=this;this.el=b,this.$el=a(b),this.$el.data("Popup",this),a("html").addClass("i-popup-ready"),a(document).bind("popup:keyup",function(a){27===a.keyCode&&c.close()}),a(document).on("keyup",function(){a(document).trigger("popup:keyup")}),this.$el.find(".b-solution-options").on("so:calculate",function(a,b){0==+b?c.$el.find(".b-popup__button .b-button").addClass("i-disabled"):c.$el.find(".b-popup__button .b-button").removeClass("i-disabled")}),this.$el.find(".b-popup__close").click(function(a){a.preventDefault(),c.close()})}function c(b){var c=this;this.el=b,this.$el=a(b),this.$el.data("SolutionOptions",this),this.$el.find(".b-so__i").click(function(b){var d=a(this);if(!a(b.target).closest(".b-so__select-container").length&&!c.$el.hasClass("i-unselective")){if(d.data("disabled"))return void c.showDisabledNote(d,b);d.toggleClass("i-unchecked");var e=c.calculate(),f=d.find(":checkbox").get(0);f.checked?f.checked=!1:f.checked=!0;var g=d.find("select").get(0);g&&(g.disabled=!g.disabled),d.hasClass("i-unchecked")?d.closest(".b-so__i").find(".b-so__select").selectmenuPrice("disable"):d.closest(".b-so__i").find(".b-so__select").selectmenuPrice("enable"),0==+e?c.$el.addClass("i-unchecked"):c.$el.removeClass("i-unchecked"),c.$el.trigger("so:calculate",[e])}}),this.$el.find("select").change(function(){var b=a(this).find("option:selected").data("price");a(this).closest(".b-so__i").find(".b-so__price:not(.i-old) .b-so__price-num").text(b);var d=a(this).find("option:selected").data("old-price")||"";a(this).closest(".b-so__i").find(".b-so__price.i-old .b-so__price-num").text(d),c.calculate()})}a(window).scroll(function(){var b=a(document).scrollTop()+parseInt(window.screen.height)-150;a("fieldset").each(function(){a(this).offset().top<b&&a(this).addClass("i-move")})}).scroll(),a("form").form();var d=a("#demo-iframe"),e=a(window);d.length&&e.resize(function(){d.height(e.height()-d.offset().top)}).resize();var f=document.getElementById("b-slider");window.Ps&&f&&Ps.initialize(f),window.addEventListener("onBitrixLiveChat",function(a){a.detail.widget.subscribe({type:BX.LiveChatWidget.SubscriptionType.userMessage,callback:function(a){"undefined"==typeof dataLayer&&(dataLayer=[]),dataLayer.push({ecommerce:{purchase:{actionField:{id:"chatsend1",goal_id:"46611745"},products:[{}]}}})}})}),a('.b-button[href^="#popup"]').click(function(b){b.preventDefault();var c=a(this),d=c.attr("href");a(d).data("Popup").open()}),a(".b-checkbox").click(function(b){a(b.target).is("a")||a(this).toggleClass("i-unchecked").removeClass("i-warning")}),a(".b-checkbox :checkbox").click(function(a){a.stopPropagation()}),a(".i-float .b-input-text").focus(function(){a(this).parent(".i-float").addClass("i-focus")}).blur(function(){var b=a(this);""===b.val()&&b.parent(".i-float").removeClass("i-focus")}).each(function(){""!==a(this).val()&&a(this).parent(".i-float").addClass("i-focus")}),a(".i-float .b-label").click(function(){var b=a(this).parent(".i-float");b.hasClass("i-focus")||b.find(".b-input-text").focus()}),a(".b-po__i").click(function(b){var c=a(this);c.hasClass("i-active")||c.addClass("i-active").siblings().removeClass("i-active")}),a("body").append(a(".b-popup")),a(".b-popup").each(function(){new b(this)}),b.prototype.open=function(){var b=this;this.$el.addClass("i-no-transition"),setTimeout(function(){b.$el.removeClass("i-no-transition"),a("html").addClass("i-popup-active")},0),this.align(),this.$cover=a('<div class="b-popup-cover"></div>'),this.$el.before(this.$cover),this.$cover.click(function(a){a.preventDefault(),b.close()})},b.prototype.close=function(){this.$cover.remove(),a("html").removeClass("i-popup-active")},b.prototype.align=function(){var b=0,c=a(window).height(),d=this.$el.outerHeight(),e=(window.pageYOffset||document.documentElement.scrollTop)/.9;b=c>this.$el.outerHeight()?c/2+e-d/2-20+"px":e+20+"px",this.$el.css({left:"50%",marginLeft:-this.$el.outerWidth()/2+"px",top:b})},a(".b-select").selectmenu(),a(".b-slide-button").click(function(b){a("#b-slider").toggleClass("i-open"),b.stopPropagation(),b.preventDefault()}),a("#b-slider").click(function(a){a.stopPropagation()}),a(document).bind("click",function(){a("#b-slider.i-open").removeClass("i-open")}),document.documentElement.addEventListener("touchstart",function(){a("#b-slider.i-open").removeClass("i-open")},!1),a(".b-solution-options").each(function(){new c(this)}),a.widget("custom.selectmenuPrice",a.ui.selectmenu,{_renderItem:function(b,c){var d=a("<li>");return c.disabled&&d.addClass("ui-state-disabled"),this._setText(d,c.label),d.attr("data-price",a(c.element).data("price")),d.attr("data-old-price",a(c.element).data("old-price")),d.appendTo(b)}}),a(".b-so__select").each(function(){var b=a(this);b.selectmenuPrice({width:400,appendTo:b.closest(".b-so__select-container"),select:function(a,c){var d=c.item.element.data("price");b.closest(".b-so__i").find(".b-so__price:not(.i-old) .b-so__price-num").text(d);var e=c.item.element.data("old-price")||"";e?b.closest(".b-so__i").find(".b-so__price.i-old ").removeClass("i-hide").find(".b-so__price-num").text(e):b.closest(".b-so__i").find(".b-so__price.i-old ").addClass("i-hide"),b.closest(".b-solution-options").data("SolutionOptions").calculate()}})}),c.prototype.showDisabledNote=function(b,c){var d=a('<div class="b-so__note">'+b.data("disabled")+"</div>"),e=b.offset().top;b.offset().left;b.find(".b-so__note").remove(),d.css({top:c.pageY-e-25+"px",left:(a(document).width()-230)/2+"px"}),b.append(d)},c.prototype.calculate=function(){var b=0;return this.$el.find(".b-so__i:not( .i-unchecked ) .b-so__price:not(.i-old) .b-so__price-num").each(function(){b+=Number(a(this).text().split(" ").join(""))}),b=String(b).replace(/(\d{3})$/g," $1"),this.$el.find(".b-so__summ-num").text(b),b},a.fn.tabs=function(){return this.each(function(){function b(b){var g=a(b.target);b.preventDefault(),g.hasClass("i-active")||(f(g),e(g),d(g),c(g))}function c(a){if(window.history){var b=a.data("tab"),c="?tab="+b;m||window.history.pushState({tab:b},"page 2",c),m=!1}}function d(b){var c=b.data("tab");i.find(".b-tabs__i").each(function(){var b=a(this);b.data("tab")===c&&(k.removeClass("i-active"),b.addClass("i-active"),b.find(".fotorama").length&&b.find(".fotorama").data("fotorama").resize({width:"100%"}))})}function e(a){l.css({left:a.position().left+"px",width:a.outerWidth()})}function f(a){j.removeClass("i-active"),a.addClass("i-active")}function g(){var a=String(window.location.search).match(/tab=([-_a-z]+)/);if(a){a=a[1];b({target:j.filter("[data-tab="+a+"]"),preventDefault:function(){}})}}var h=this,i=a(h),j=i.find(".b-tabs__tab"),k=i.find(".b-tabs__i"),l=i.find(".b-tabs__decor"),m=!1;j.click(b),e(j.eq(0)),g(),window.onpopstate=function(a){m=!0,a.state?j.filter("[data-tab="+a.state.tab+"]").click():j.eq(0).click()}})},a(".b-tabs:not(.i-links)").tabs(),a(".b-tabs.i-links").each(function(){var b=a(this),c=b.find(".b-tabs__decor"),d=b.find(".b-tabs__tab.i-active");c.css({left:d.position().left+"px",width:d.outerWidth()})}),a(".b-video-container__menu").delegate(".b-video-container__menu-item","click",function(b){b.preventDefault();var c=a(this),d=c.closest(".b-video-container"),e=c.closest(".b-video-container").find(".b-video-container__tab[data-tab="+c.data("tab")+"]"),f=d.find(".b-video-container__tab.i-active");e.hide().removeClass("hidden"),d.height(d.height()).height(e.height()+96),d.find(".b-video-container__menu-item").removeClass("i-active"),c.addClass("i-active"),c.closest(".b-video-container").find(".b-video-container__tab").not("[data-tab="+c.data("tab")+"]").removeClass("i-active").removeClass("show-tab").addClass("hide-tab"),f.removeClass("i-active").removeClass("show-tab").addClass("hide-tab"),setTimeout(function(){f.hide(),e.show().removeClass("hide-tab").addClass("show-tab").addClass("i-active")},500)})})}(jQuery);
( function($) {
  $.fn.form = function() {
    return this.each( function() {
      var $this = $( this );
      
      if ( $this.instance ) {
        return;
      }
      
      $this.instance = new Form( this );
    });
  };

  function Form( elem ) {
    this.init( elem );
  }

  Form.prototype.init = function( elem ) {
    //init variables and elements
    this.$elem = $( elem );
    this.$elem.data( 'Form', this );
    this.submitFlag = 0;
    this.firstElement = undefined;
    this.$submitButton = this.$elem.find( '[type=submit]' );
    
    //handle events
    this.$submitButton.click( this.clickSubmitButton );
    this.$elem.submit( this.submitForm );
    this.$elem.find( '.b-input-text' ).focus( this.focusElement );
  };

  Form.prototype.clickSubmitButton = function(e) {
    var self = $( e.target ).closest( 'form' ).data( 'Form' );
    self.$elem.submit();
    e.preventDefault();
  };

  Form.prototype.submitForm = function(e) {
    var self = $( e.target ).data( 'Form' );
    if ( self.$submitButton.hasClass( 'i-disabled' ) || !self.isValid() ) {
      e.preventDefault();
    }
  };

  Form.prototype.focusElement = function(e) {
    var $item = $( e.target ),
        self = $item.closest( 'form' ).data( 'Form' );
    self.removeWarning( $item );
  };

  Form.prototype.setWarning = function( $elem ) {
    $elem.closest( '.b-form-field' ).addClass( 'i-warning' );
    $elem.closest( '.b-checkbox' ).addClass( 'i-warning' );
    
    if ( this.submitFlag === 0 ) {
      this.firstElement = $elem;
    }
    this.submitFlag = 1;
  };

  Form.prototype.removeWarning = function( $elem ) {
    $elem.closest( '.b-form-field' ).removeClass( 'i-warning' );
  };

  Form.prototype.isValid = function() {
    var self = this;
    
    return check();
    
    function check() {
      self.submitFlag = 0;
      self.firstElement = undefined;
      
      checkSpecialTypes();
      checkRequiredOr();
      checkEqual();
      checkEmpty();
      
      if (self.submitFlag === 0) {
        return true;
      }
      
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if ((self.firstElement.offset().top - scrolled) < 0) {
        var top = self.firstElement.offset().top - 50;
        $.scrollTo( top, 500 );
        if(self.firstElement !== undefined) {
          self.firstElement.focus();
        }
      }
      return false;						
    }
    
    function checkEqual() {
      var orFieldsObject = {};
      self.$elem.find("[data-equal]").each(function() {
        var $filed = $(this),
          data = $filed.attr("data-equal");
          
        if(!orFieldsObject[data]) {
          orFieldsObject[data] = self.$elem.find("[data-equal=" + data + "]");
        }
      });
      
      var flag;
      $.each( orFieldsObject, function( key, value ) {
        flag = true;
        
        var value = $.trim($(orFieldsObject[key][0]).val());
        orFieldsObject[key].each(function() {
          if($.trim($(this).val()) !== value) {
            flag = false;
          }
        });
        
        if(!flag) {
          orFieldsObject[key].each(function() {
            self.setWarning($(this));
          });
        }
        else {
          orFieldsObject[key].each(function() {
            self.removeWarning($(this));
          });
        }
      });
    }
    
    function checkEmpty() {
      self.$elem.find(".b-select.i-required").each(function() {
        if($(this).find("input:hidden").val() === "") {
          self.setWarning($(this));
        } else {
          self.removeWarning($(this));
        }
      });
      self.$elem.find("[required]").each(function() {
        var $field = $(this),
          $val = $.trim($field.val());
        
        if ($field.is("[type=radio]")) {
          if($field.closest(".b-form-field").find("input:checked").size() === 0) {
            self.setWarning($field);
          }
        }
        else if ($field.is("[type=checkbox]")) {
          if(!$field.is(":checked")) {
            self.setWarning($field);
          } else {
            self.removeWarning($field);
          }
        }
        else if ($field.is("[data-equal]")) {
          if($.trim($field.val()) === "") {
            self.setWarning($field);
          }
        }
        else if ($val === "") {
          self.setWarning($field);
        }
        else if(!$field.is("[type=email]") && !$field.is("[type=tel]") && !$field.is("[type=number]") && !$field.is("[type=url]")) {
          self.removeWarning($field);
        }
      });
    }
    
    function checkSpecialTypes() {
      checkPasswordType();
      checkEmailType();
      checkTelType();
      checkNumberType();
      checkUrlType();
      
      function checkPasswordType() {
        self.$elem.find("input:visible[type=password]").each(function() {
          var $field = $(this),
            $val = $.trim($field.val()),
            num = 6;
          
          if ($val.length < num) {
            self.setWarning($field);
          }
          else {
            self.removeWarning($field);
          }
        });
      }
      
      function checkEmailType() {
        self.$elem.find("[type=email]").each(function() {
          var $field = $(this),
            $val = $.trim($field.val()),
            mailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
          
          if ($val !== "" && !mailRegex.test($val)) {
            self.setWarning($field);
          }
          else {
            self.removeWarning($field);
          }
        });
      }
      
      function checkTelType() {
        self.$elem.find("[type=tel]").each(function() {
          var $field = $(this),
            $val = $.trim($field.val()),
            phoneRegex = /^([0-9-()\++\s]{5,})$/i;
          
          if ($val !== "" && !phoneRegex.test($val)) {
            self.setWarning($field);
          }
          else {
            self.removeWarning($field);
          }
        });
      }
      
      function checkNumberType() {
        self.$elem.find("[type=number]").each(function() {
          var $field = $(this),
            $val = $.trim($field.val()),
            numRegex = /^([0-9\s\.,]+)$/i;
          
          if ($val !== "" && !numRegex.test($val)) {
            self.setWarning($field);
          }
          else {
            self.removeWarning($field);
          }
        });
      }
      
      function checkUrlType() {
        self.$elem.find("[type=url]").each(function() {
          var $field = $(this),
            $val = $.trim($field.val()),
            urlRegex = /^((https?:\/\/)?(www\.)?([-a-z0-9]+\.)+[a-z]{2,})$/i;
          
          if ($val !== "" && !urlRegex.test($val)) {
            self.setWarning($field);
          }
          else {
            self.removeWarning($field);
          }
        });
      }
      
    }
    
    function checkRequiredOr() {
      var orFieldsObject = {};
      self.$elem.find("[data-or]").each(function() {
        var $filed = $(this),
          data = $filed.attr("data-or");
          
        if(!orFieldsObject[data]) {
          orFieldsObject[data] = self.$elem.find("[data-or=" + data + "]");
        }							
      });
      
      var counter;
      for(var key in orFieldsObject) {
        counter = 0;
        
        orFieldsObject[key].each(function() {
          if($.trim($(this).val()) !== "") {
            counter++;
          }
        });
        
        if(counter === 0) {
          orFieldsObject[key].each(function() {
            self.setWarning($(this));
          });
        }
        else {
          orFieldsObject[key].each(function() {
            self.removeWarning($(this));
          });
        }
      }
    }
  };
}( jQuery ));
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*! Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.14
 */
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));