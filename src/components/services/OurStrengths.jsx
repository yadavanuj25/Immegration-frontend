import React from "react";
import {
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const OurStrengths = () => {
  return (
    <section className="bg-[#f7f7f7] dark:bg-gray-900">
      <div className="container mx-auto py-14 md:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
          Our <span className="text-primary">Strengths</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <CheckCircleIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Expert Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our team has years of experience handling immigration cases
              efficiently.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <StarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Proven Success
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              High approval rates for visas and PR applications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Trusted & Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your personal information is safe with our secure systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
