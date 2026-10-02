// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Initial Load Animation (Intro Sequence)
const tl = gsap.timeline();

// Headline reveal (Fade + Drop down)
tl.from(".headline", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Statistics cards staggered entry
tl.from(".stat-card", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
}, "-=0.5");

// Car image zoom-in reveal
tl.from(".car-wrapper", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.6");


// 2. Scroll-Based Animation (Synced with page scroll)
gsap.to(".car-wrapper", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth sync with scrolling
    },
    scale: 1.15,
    y: 80,
    rotation: 2,
    ease: "none"
});

// Stats cards fade-out on scroll
gsap.to(".stats-container", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "center top",
        scrub: true
    },
    opacity: 0,
    y: -30
});
