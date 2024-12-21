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

function reklama() { 
    let myToastEl = document.getElementById("liveToast"); 
    let myToast = bootstrap.Toast.getOrCreateInstance(myToastEl); 
    if (myToast["_element"].classList[2] !== "show") { 
        myToast.show(); 
    }
}

window.addEventListener("DOMContentLoaded", function () {
    this.setInterval(reklama, 5000);
});