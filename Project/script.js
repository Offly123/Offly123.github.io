$(document).ready(function() {
    $(".menu-item").mouseenter(function() {
        $(this).css({
            animationName: "menuUnderlineShow",
            textDecorationColor: "#a723ff",
        });
    });
    $(".menu-item").mouseleave(function() {
        $(this).css({
            animationName: "menuUnderlineHide",
            textDecorationColor: "transparent",
        });
    });
    $(".navigation-button").click(function() {
        toggleClass(document.getElementById('navigation-dropdown'), "hide");
    });
});

$(document).ready(function() {
   $(".accordion hehe").hide();
   $(".accordion ul").click(function () {
     $(this).next("").slideToggle("slow")
       .siblings("p:visible").slideUp("slow");
   });
  
  }); 