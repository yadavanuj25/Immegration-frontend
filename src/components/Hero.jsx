import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroSlider from "../data/heroSlider";

const Hero = () => {
  const ref = useRef(null);
  const [animateIndex, setAnimateIndex] = useState(null);

  useEffect(() => {
    if (animateIndex !== null) {
      const timer = setTimeout(() => {
        setAnimateIndex(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [animateIndex]);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      preloadImages={false}
      lazy={true}
      onSlideChange={(swiper) => setAnimateIndex(swiper.activeIndex)}
    >
      {heroSlider.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            ref={ref}
            className="relative w-full min-h-[70vh] sm:h-[90vh] flex justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative max-w-6xl z-20 text-center px-4"
            >
              {/* Title */}
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase text-white leading-tight">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white font-medium ">
                <i>Your Trusted Immigration & Visa Partner</i>
              </p>

              {/* CTA Button */}
              <motion.a
                href="/contact"
                className="primary-btn py-3 !mt-8 inline-flex items-center gap-3 group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Get Free Consultation
                <MdOutlineLocalPhone className="group-hover:animate-bounce group-hover:text-lg duration-200" />
              </motion.a>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import heroSlider from "../data/heroSlider";

// const Hero = () => {
//   const ref = useRef(null);
//   const [animateIndex, setAnimateIndex] = useState(null);

//   useEffect(() => {
//     if (animateIndex !== null) {
//       const timer = setTimeout(() => setAnimateIndex(null), 600);
//       return () => clearTimeout(timer);
//     }
//   }, [animateIndex]);

//   return (
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       // autoplay={{ delay: 5000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       preloadImages={false}
//       lazy={true}
//       onSlideChange={(swiper) => setAnimateIndex(swiper.activeIndex)}
//       className="w-full"
//     >
//       {heroSlider.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             ref={ref}
//             className="relative w-full min-h-[70vh] sm:h-[90vh] flex justify-center items-center overflow-hidden bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.bg})` }}
//           >
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

//             {/* Background Large Title */}
//             <motion.h1
//               className="hidden sm:block max-w-6xl absolute text-[14vw] sm:text-[8vw] font-extrabold uppercase text-white/80 z-0 leading-none text-center tracking-wider"
//               initial={{ opacity: 0, y: -100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//             >
//               {slide.title}
//             </motion.h1>

//             {/* Foreground Content */}
//             <div className="relative max-w-5xl z-20 text-center sm:text-center">
//               <motion.h2
//                 className="text-[4vw] sm:text-[6vw] font-extrabold uppercase text-white drop-shadow-lg leading-none"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 {slide.title}
//               </motion.h2>
//               {slide.subtitle && (
//                 <motion.p
//                   className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed"
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                   {slide.subtitle}
//                 </motion.p>
//               )}
//               <motion.a
//                 href="/contact"
//                 className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 Get Free Consultation
//               </motion.a>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Hero;
