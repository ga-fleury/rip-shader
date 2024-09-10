import PaperRipAnimation from "./paperRip.mjs";

    const isMobile = window.innerWidth <= 991

    const belowCanvas = document.querySelector("#below-canvas");
    const aboveCanvas = document.querySelector("#above-canvas");

    // console.log('canvas: ', aboveCanvas);
    // console.log('is Horizontal: ', isHorizontal && !isMobile)

    const paperRipAnimation = new PaperRipAnimation(aboveCanvas, {
        color: "#000000",
        background: "#000000",
        backgroundOpacity: 0,
        ease: "power3.inOut",
        duration: 2,
        texture:
            "./paper-texture.jpg",
        amplitude: 0.25,
        rippedFrequency: 3.5,
        rippedAmplitude: 0.05,
        curveFrequency: 1,
        curveAmplitude: 0.1,
        rippedDelta: 1,
        rippedHeight: 0.15,
        horizontal: false
    });

    // console.log('effect: ', paperRipAnimation);

    window.paperRipAnimation = paperRipAnimation;

    // if (window.location.href.includes('?')) { app.classList.add('appear') }
    // if (window.location.pathname !== '/' && !window.location.pathname.includes('/work/') && !window.location.href.includes('?')) {
    //     window.belowPaperRipAnimation = new PaperRipAnimation(belowCanvas, {
    //         color: "#cdc6be",
    //         background: "#1D1D1B",
    //         backgroundOpacity: 1,
    //         ease: "power3.inOut",
    //         duration: 2,
    //         texture:
    //             "./paper-texture.jpg",
    //         amplitude: 0.25,
    //         rippedFrequency: 3.5,
    //         rippedAmplitude: 0.05,
    //         curveFrequency: 1,
    //         curveAmplitude: 0.1,
    //         rippedDelta: 1,
    //         rippedHeight: 0.07,
    //         horizontal: false
    //     });

    //     //const image = document.querySelector("[data-image]")
    //     //if(image) {
    //     //  const src = image.getAttribute("data-image")
    //     //  window.belowPaperRipAnimation.curtain.setImage(image)
    //     //}

    //     // console.log('in init')
    //     window.belowPaperRipAnimation.in()
    //     const app = document.querySelector('#app')
    //     setTimeout(() => {
    //         app.classList.add('appear')
    //     }, 2000)
    // }

    // //Work page
    // const navWorkPage = document.querySelector(".nav.work")
    // if (navWorkPage) {
    //     const workCanvas = navWorkPage.querySelector('.gl-canvas canvas')
    //     window.workPaperRipAnimation = new PaperRipAnimation(workCanvas, {
    //         color: "#1D1D1B",
    //         background: "#000000",
    //         backgroundOpacity: 0,
    //         ease: "power3.inOut",
    //         duration: 2,
    //         texture:
    //             "./paper-texture.jpg",
    //         amplitude: 0.25,
    //         rippedFrequency: 3.5,
    //         rippedAmplitude: 0.05,
    //         curveFrequency: 1,
    //         curveAmplitude: 0.1,
    //         rippedDelta: 1,
    //         rippedHeight: 0.07,
    //         horizontal: true
    //     });
    // }