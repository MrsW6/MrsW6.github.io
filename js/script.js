$(function(){function o(){s!=$(this)&&(t.call(s),s=$(this)),$(this).children(".index-post-info").fadeTo(500,1),$(this).find(".index-post-title").removeClass("deactiveColor"),$(this).find(".index-post-title").addClass("activeColor"),$(this).find(".index-post-categories").children("a").removeClass("deactiveColor"),$(this).find(".index-post-categories").children("a").addClass("activeColor")}function t(){$(this).children(".index-post-info").fadeTo(500,0),$(this).children(".index-post-info").fadeTo(500,0),$(this).find(".index-post-title").addClass("deactiveColor"),$(this).find(".index-post-title").removeClass("activeColor"),$(this).find(".index-post-categories").children("a").addClass("deactiveColor"),$(this).find(".index-post-categories").children("a").removeClass("activeColor")}function a(o){$(".catalog-dropdown").is(":hidden")?$(".catalog-dropdown").fadeIn():$(".catalog-dropdown").fadeOut(),$(document).one("click",function(){$(".catalog-dropdown").fadeOut()}),o.stopPropagation()}function i(){void 0===l.y&&(l.y=window.pageYOffset);var o=l.y-window.pageYOffset;o<0?d="down":o>0&&(d="up"),l.y=window.pageYOffset}function e(){$(".lightbox").fadeIn(500),$(".lightbox").attr("style","display: flex"),$(this).attr("value")?$(".gallery-photo").attr("src",$(this).attr("value")):$(".gallery-photo").attr("src",$(this).attr("src")),$("body").addClass("hideoverflow")}function n(){$(".lightbox").fadeOut(500),$("body").removeClass("hideoverflow")}var d,s=null,l=(document.getElementById("to-top"),{y:"undefined"});$("#to-top").hide(),$(".catalog-dropdown").hide(),$("a").focus(function(){this.blur()}),$("pre").addClass("linenums"),$("pre").addClass("prettyprint"),prettyPrint(),$(".archive-wrapper").find("a").addClass("activeColor"),$(".pagination-btn").find("a").addClass("deactiveColor"),$(".footer-banner").find("a").addClass("activeColor"),$(".post-wrapper").find("a").addClass("activeColor"),$(".index-post-title").addClass("deactiveColor"),$(".header-title").addClass("deactiveColor"),$(".post-date").addClass("deactiveColor"),$(".author-name").addClass("deactiveColor"),$(".toTop").addClass("deactiveColor"),$(".index-post-wrapper").on("touchstart",o),$(".index-post-wrapper").on("mouseenter",o),$(".index-post-wrapper").on("mouseleave",t),$(".catalog-btn").on("click",a),$(".catalog-dropdown").on("click",function(o){o.stopPropagation()}),$("a.toTop").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1}),$(".gallery-thumbnail").on("click",e),$(".post-content img").on("click",e),$(".gallery-photo").on("click",function(o){o.stopPropagation()}),$(".close-gallery").on("click",n),$(".lightbox").on("click",n),window.onscroll=function(o){i(),"down"==d?$("#to-top").animate({opacity:"hide"},{duration:500,easing:"swing"}):"up"==d&&$("#to-top").animate({opacity:"show"},{duration:500,easing:"swing"})}});