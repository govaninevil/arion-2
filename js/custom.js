$(document).ready(function () {
    $(".best-suite .best-suite-background > img:first").attr("active", true);
    $(".best-suite .best-suite-content .sup-col").hover(function () {
        let $this = $(this);
        let $sectionBackground = $this.closest(".best-suite").find(".best-suite-background");
        $sectionBackground.find("img").removeAttr("active");
        $sectionBackground.find("img[data-id='" + $this.attr("data-id") + "']").attr("active", true);
    });

    $('.multi-item-carousel').carousel({
        interval: false
    });

    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

const nextIcon = '<img src ="./image/left.png" alt:"right">'
const prevIcon = '<img src ="./image/right.png" alt:"right">'

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [
        nextIcon,
        prevIcon
    ],
    responsive:{
        0:{
            items:3
        }
    }
})
