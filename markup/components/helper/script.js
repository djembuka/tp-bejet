!function(a){"use strict";a(function(){function b(a){return/(10|11|12|13|14|15|16|17|18|19)$/.test(a)?"решений":/.*1$/.test(a)?"решение":/[2-4]$/.test(a)?"решения":"решений"}var c=a(".b-helper-tabs span"),d=a(".b-helper-tab"),e=a(".b-helper form"),f=a("#helperLink").attr("href"),g=a(".b-helper-body").data("action"),h=a(".b-helper-body").data("method");a(".b-helper-tabs").delegate("span","click",function(){var b=a(this),f=b.data("tab"),g=a(".b-helper-tab[ data-tab="+f+"]");c.removeClass("i-active"),b.addClass("i-active"),d.removeClass("i-active"),g.addClass("i-active"),b.index()===c.length-1?e.addClass("i-submit"):e.removeClass("i-submit")}),a(".b-helper").delegate("input:checkbox, input:radio","click",function(c){a.ajax({url:g,type:h,dataType:"json",data:e.serialize(),success:function(c){a("#helperCount").text(c.COUNT),a("#helperCountUnit").text(b(c.COUNT)),a("#helperLink").attr({href:f+"?"+e.serialize()}),0==c.COUNT?(a("#helperLink").hide(),a("#helperLinkAlt").show()):(a("#helperLink").show(),a("#helperLinkAlt").hide())},error:function(){}})}),e.find(".b-button").click(function(b){b.preventDefault(),a(".b-helper-tabs .i-active").next("span").click()})})}(jQuery);