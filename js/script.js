const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

TweenMax.from(".logo", 1, {
    delay: 1,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".navbar-expand-lg", {
    delay: 1,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})

TweenMax.from(".assiete", {
    delay: 1.5, 
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
})

TweenMax.from(".banniere", {
    delay: 1.7, 
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})