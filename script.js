$(function () {
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }

    // fix navbar when scrolling
    var banner = $('#nav-container');
    new ScrollMagic.Scene({
        triggerElement: '#section-web',
        triggerHook: 'onCenter',
        offset: -150
    })
        .setClassToggle(banner[0], 'fixed')
        .setTween(banner[0], 0.3, {top: 0, ease: Power2.EaseIn})
        .addTo(controller);
});