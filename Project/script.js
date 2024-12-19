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

    $(".menuMobileItem").hide();

    $(".navigation-button").click(function() {
        toggleClass(document.getElementById('navigation-dropdown'), "hide");
    });

    $("#menuMobileButton").click(function() {
        $(".menuMobileItem").toggle();
    });

    $(".gallery").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [ {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                }
            },
        ]
    });

});