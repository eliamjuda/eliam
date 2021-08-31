document.addEventListener("DOMContentLoaded", (e) => {

    var skewSetter = gsap.quickSetter(".trigger", "skewY", "deg");
    var proxy = { skew: 0 }

    ScrollTrigger.create({
        onUpdate: self => {
            var skew = self.getVelocity() / -1400;
            if(Math.abs(skew) > Math.abs(proxy.skew)){
                proxy.skew = skew;
                gsap.to(proxy,{skew:0, duration:1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)})
            }
        }
    });

    gsap.set(".trigger", {transformOrigin: "right center", force3D:true});

    gsap.fromTo(
        ".logo",  {y: 0, opacity: 0}, {duration: 0.5, delay: 1.6, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".menu > div > p",  {y: -100, opacity: 0}, {duration: 1.5, delay: 1, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".li-1",  {y: -100, opacity: 0}, {duration: 1.5, delay: 1, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".li-2",  {y: -100, opacity: 0}, {duration: 1.5, delay: 1.1, y: 0, opacity: 1}
    );
    gsap.fromTo(
        ".li-3",  {y: -100, opacity: 0}, {duration: 1.5, delay: 1.2, y: 0, opacity: 1}
    );
    gsap.fromTo(
        ".li-4",  {y: -100, opacity: 0}, {duration: 1.5, delay: 1.3, y: 0, opacity: 1}
    );

    // --------------------- HEADER PART --------------------------------------
    
    gsap.fromTo(
        ".button",  {y: 0, opacity: 0}, {duration: 1.2, delay: 1, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".header-info > h2",  {y: -100, opacity: 0}, {duration: 1, delay: .8, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".header-info > h1",  {y: -100, opacity: 0}, {duration: 1, delay: .6, y: 0, opacity: 1}
    ); 
    gsap.fromTo(
        ".header-info > p",  {y: -100, opacity: 0}, {duration: 1, delay: .4, y: 0, opacity: 1}
    ); 
});