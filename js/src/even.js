!function(e){"use strict";var t={};t.backToTop=function(){var t=$("#back-to-top");$(e).scroll(function(){$(e).scrollTop()>100?t.fadeIn(1e3):t.fadeOut(1e3)}),t.click(function(){$("body,html").animate({scrollTop:0})})},t.mobileNavbar=function(){var e=$("#mobile-navbar"),t=$(".mobile-navbar-icon"),o=new Slideout({panel:document.getElementById("mobile-panel"),menu:document.getElementById("mobile-menu"),padding:180,tolerance:70});o.disableTouch(),t.click(function(){o.toggle()}),o.on("beforeopen",function(){e.addClass("fixed-open"),t.addClass("icon-click").removeClass("icon-out")}),o.on("beforeclose",function(){e.removeClass("fixed-open"),t.addClass("icon-out").removeClass("icon-click")}),$("#mobile-panel").on("touchend",function(){o.isOpen()&&t.click()})},t.toc=function(){var t=$(".post-toc"),o=$(".post-footer");if(t.length){var n=t.offset().top-20,i=o.offset().top-t.height()-20,c={start:{position:"absolute",top:n},process:{position:"fixed",top:20},end:{position:"absolute",top:i}};$(e).scroll(function(){var o=$(e).scrollTop();o<n?t.css(c.start):o>i?t.css(c.end):t.css(c.process)})}var a=$(".toc-link"),s=$(".headerlink"),l=$.map(s,function(e){return $(e).offset().top});$(e).scroll(function(){for(var t=$(e).scrollTop(),o=0;o<a.length;o++){var n=o+1===a.length,i=l[o]-30,c=n?1/0:l[o+1]-30;i<t&&t<=c?$(a[o]).addClass("active"):$(a[o]).removeClass("active")}})},t.fancybox=function(){$.fancybox&&($(".post").each(function(){$(this).find("img").each(function(){$(this).wrap('<a class="fancybox" href="'+this.src+'" title="'+this.alt+'"></a>')})}),$(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic"}))},t.visits=function(){function e(e,t){var o=e.text()+" "+t;e.text(o)}var t=$(".post-visits");if("object"==typeof AV){var o=AV.Object.extend("Counter");1===t.length?function(o){var n=new AV.Query(o),i=t.data("url").trim(),c=t.data("title").trim();n.equalTo("url",i),n.find().then(function(n){if(n.length>0)n[0].save(null,{fetchWhenSave:!0}).then(function(e){return e.increment("time",1),e.save()}).then(function(o){e(t,o.get("time"))});else{var a=new o;a.set("title",c),a.set("url",i),a.set("time",1),a.save().then(function(o){e(t,a.get("time"))})}},function(e){console.log("Error:"+e.code+" "+e.message)})}(o):function(o){t.each(function(){var t=$(this),n=new AV.Query(o),i=t.data("url").trim();n.equalTo("url",i),n.find().then(function(o){if(0===o.length)e(t,0);else{var n=o[0];e(t,n.get("time"))}},function(e){console.log("Error:"+e.code+" "+e.message)})})}(o)}},e.Even=t}(window);