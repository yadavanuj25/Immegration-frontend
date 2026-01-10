// src/components/TestimonialsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Web Developer",
    feedback:
      "This platform completely transformed the way I learn coding. The projects and guidance are amazing!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer",
    feedback:
      "The Coding Journey made it easy to understand even the toughest concepts. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Gupta",
    role: "App Developer",
    feedback:
      "I was able to build my first app within weeks. The tutorials are practical and fun!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Student",
    feedback:
      "The mentorship and projects boosted my confidence. I’m ready for internships now.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className=" bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-14 md:py-24 min-h-[350px] sm:min-h-[450px]">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center  mb-8 sm:mb-12 text-gray-800 dark:text-white"
        >
          What Our <span className="text-primary">Students</span> Say
        </motion.h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl p-6  duration-300  flex flex-col"
              >
                <div className="flex justify-center items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {t.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-center dark:text-gray-300 flex-grow text-md sm:text-lg">
                  {t.feedback}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
