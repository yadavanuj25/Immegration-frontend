import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa6";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-4xl text-primary" />,
    number: "25K+",
    label: "Happy Clients",
  },
  {
    id: 2,
    icon: <MdOutlineTravelExplore className="text-4xl text-success" />,
    number: "120+",
    label: "Countries Covered",
  },
  {
    id: 3,
    icon: <IoMdGlobe className="text-4xl text-orange" />,
    number: "15+",
    label: "Years Experience",
  },
  {
    id: 4,
    icon: <FaRegHandshake className="text-4xl text-secondary2" />,
    number: "1000+",
    label: "Successful Visas",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto py-14 md:py-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transform transition duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
              <p className="text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
