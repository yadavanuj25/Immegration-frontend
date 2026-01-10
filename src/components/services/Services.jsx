import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    id: 1,
    title: "Business Visa",
    img: "/src/assets/images/image1.png",
    link: "/",
  },
  {
    id: 2,
    title: "Dependent Visa",
    img: "/src/assets/images/image2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Family Visa",
    img: "/src/assets/images/image3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Investor / Entrepreneur Visa",
    img: "/src/assets/images/image4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Student Visa",
    img: "/src/assets/images/image1.png",
    link: "#",
  },
  {
    id: 6,
    title: "Visitor Visa",
    img: "/src/assets/images/image2.png",
    link: "#",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto py-14 md:py-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-lg  font-bold  text-primary mb-2">
            Our Visa Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We excel in providing a Wide Range of Services including
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white group rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover transform  transition duration-500"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <Link
                  to={service.link}
                  className="primary-btn mt-4 inline-flex items-center gap-3 group"
                >
                  Learn more
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
