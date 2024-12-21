$(document).ready(function() {
    $(".dropdown").mouseenter(function() {
        $(".dropdown-wrapper").addClass("show");
        $(".dropdown-wrapper").removeClass("hide");
    });
    $(".dropdown").mouseleave(function() {
        $(".dropdown-wrapper").addClass("hide");
        $(".dropdown-wrapper").removeClass("show");
    });

    $(".menuMobileItem").hide();
    $("#menuMobileButton").click(function() {
        $(".menuMobileItem").toggle();
    });

    $(".gallery").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                }
            },
        ]
    });

});