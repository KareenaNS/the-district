// import React, { useEffect } from "react";
// import "../ParallaxTitle.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const ParallaxTitle = ({ mainText = "INTERNATIONAL", subText = "NIGHT MARKET" }) => {
//   useEffect(() => {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".scrollDist",
//         start: "0 0",
//         end: "100% 100%",
//         scrub: 1,
//       },
//     })
//       .fromTo(".stars", { y: 0 }, { y: -100 }, 0)
//       .fromTo(".moon", { y: 0 }, { y: -200 }, 0)
//       .fromTo(".city", { y: 0 }, { y: -50 }, 0);

//     const arrowBtn = document.querySelector("#arrow-btn");

//     const onEnter = () => {
//       gsap.to(".arrow", {
//         y: 10,
//         duration: 0.8,
//         ease: "back.inOut(3)",
//         overwrite: "auto",
//       });
//     };

//     const onLeave = () => {
//       gsap.to(".arrow", {
//         y: 0,
//         duration: 0.5,
//         ease: "power3.out",
//         overwrite: "auto",
//       });
//     };

//     const onClick = () => {
//       gsap.to(window, {
//         scrollTo: window.innerHeight,
//         duration: 1.5,
//         ease: "power1.inOut",
//       });
//     };

//     if (arrowBtn) {
//       arrowBtn.addEventListener("mouseenter", onEnter);
//       arrowBtn.addEventListener("mouseleave", onLeave);
//       arrowBtn.addEventListener("click", onClick);
//     }

//     return () => {
//       if (arrowBtn) {
//         arrowBtn.removeEventListener("mouseenter", onEnter);
//         arrowBtn.removeEventListener("mouseleave", onLeave);
//         arrowBtn.removeEventListener("click", onClick);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className="parallax-wrapper">
//       <div className="scrollDist"></div>
//       <main>
//         <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
//           <rect width="1200" height="800" fill="#0b0f2e" />
          
//           <image
//             className="stars"
//             xlinkHref="https://assets.codepen.io/721952/stars.png"
//             width="1200"
//             height="800"
//           />
//           <image
//             className="moon"
//             xlinkHref="https://assets.codepen.io/721952/moon.png"
//             width="200"
//             height="200"
//             x="900"
//             y="100"
//           />
//           <image
//             className="city"
//             xlinkHref="https://assets.codepen.io/721952/city-silhouette.png"
//             width="1200"
//             height="200"
//             y="600"
//           />

//         <text fill="#fff" x="300" y="200">{mainText}</text>
//         <text fill="#fff" x="300" y="280">{subText}</text>
//             <polyline
//             className="arrow"
//             fill="#fff"
//             points="599,330 599,369 590,359 590,362 600,372 610,362 610,359 601,369 601,330"
//             />
//           <rect
//             id="arrow-btn"
//             width="100"
//             height="100"
//             opacity="0"
//             x="550"
//             y="300"
//             style={{ cursor: "pointer" }}
//           />
//         </svg>
//       </main>
//     </div>
//     </>
//   );
// };

// export default ParallaxTitle;

import React, { useEffect } from "react";
import "../ParallaxTitle.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ParallaxTitle = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDist",
        start: "0 0",
        end: "100% 100%",
        scrub: 1,
      },
    })
      .fromTo(".stars", { y: 0 }, { y: -100 }, 0)
      .fromTo(".moon", { y: 0 }, { y: -200 }, 0)
      .fromTo(".city", { y: 0 }, { y: -50 }, 0);

    const arrowBtn = document.querySelector("#arrow-btn");

    const onEnter = () => {
      gsap.to(".arrow", {
        y: 10,
        duration: 0.8,
        ease: "back.inOut(3)",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(".arrow", {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onClick = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 1.5,
        ease: "power1.inOut",
      });
    };

    if (arrowBtn) {
      arrowBtn.addEventListener("mouseenter", onEnter);
      arrowBtn.addEventListener("mouseleave", onLeave);
      arrowBtn.addEventListener("click", onClick);
    }

    return () => {
      if (arrowBtn) {
        arrowBtn.removeEventListener("mouseenter", onEnter);
        arrowBtn.removeEventListener("mouseleave", onLeave);
        arrowBtn.removeEventListener("click", onClick);
      }
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="scrollDist"></div>
      <main>
<svg
  viewBox="0 0 1920 1080"
  width="100%"
  height="100%"
  preserveAspectRatio="xMidYMid slice"
  xmlns="http://www.w3.org/2000/svg"
>
          <rect width="1920" height="1080" fill="#0b0f2e" />

          <image
            className="stars"
            // xlinkHref="https://assets.codepen.io/721952/stars.png"
            xlinkHref = "https://i.ibb.co/CK69NsKV/stars.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"

          />
          <image
            className="moon"
            xlinkHref="https://i.ibb.co/0wY3kvd/moon.png"
            width="200"
            height="200"
            x="900"
            y="100"
          />
          <image
            className="city"
            xlinkHref="https://i.ibb.co/0w6C95z/city.png"
            width="100%"
            height="600"
            y="500"
          />

          {/* <text fill="#fff" x="200" y="200" fontSize="48">
            INTERNATIONAL NIGHT MARKET
          </text> */}

          <polyline
            className="arrow"
            fill="#fff"
            points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
          />
          <rect
            id="arrow-btn"
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </main>
    </div>
  );
};

export default ParallaxTitle;
