!function(t){var a=t("#search-form-wrap"),e=!1,n=function(){e=!0},i=function(t){setTimeout(function(){e=!1,t&&t()},200)},o=['<div style="display: none;">','<script src="https://s11.cnzz.com/z_stat.php?id=1260716016&web_id=1260716016" language="JavaScript"><\/script>',"</div>"].join(""),s=t(o);t("#container").append(s),t("#nav-search-btn").on("click",function(){e||(n(),a.addClass("on"),i(function(){t(".search-form-input").focus()}))}),t(".search-form-input").on("blur",function(){n(),a.removeClass("on"),i()}),t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var e=t(this),n=e.attr("data-url"),i=encodeURIComponent(n),o="article-share-box-"+e.attr("data-id"),s=e.offset();if(t("#"+o).length){var r=t("#"+o);if(r.hasClass("on"))return void r.removeClass("on")}else{var c=['<div id="'+o+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+i+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+i+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+i+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),r=t(c);t("body").append(r)}t(".article-share-box.on").hide(),r.css({top:s.top+25,left:s.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),t(".article-entry").each(function(a){t(this).find("img").each(function(){if(!t(this).parent().hasClass("fancybox")){var a=this.alt;a&&t(this).after('<span class="caption">'+a+"</span>"),t(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')}}),t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})}),t.fancybox&&t(".fancybox").fancybox();var r=t("#container"),c=!1,l=function(){c=!0},h=function(){setTimeout(function(){c=!1},200)};t("#main-nav-toggle").on("click",function(){c||(l(),r.toggleClass("mobile-nav-on"),h())}),t("#wrap").on("click",function(){!c&&r.hasClass("mobile-nav-on")&&r.removeClass("mobile-nav-on")})}(jQuery);