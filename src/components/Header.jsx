import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo/anuj-logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const closeTimeout = useRef(null);
  const containerRefs = {
    company: useRef(null),
    services: useRef(null),
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const openDropdown = (menu) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(menu);
  };

  const delayedClose = (ms = 150) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setDropdownOpen(null), ms);
  };

  const handleContainerBlur = (menu) => {
    setTimeout(() => {
      if (
        containerRefs[menu].current &&
        !containerRefs[menu].current.contains(document.activeElement)
      ) {
        setDropdownOpen(null);
      }
    }, 0);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-lg hover:text-light_primary font-semibold"
            >
              Home
            </Link>

            {/* Company dropdown */}
            <div
              ref={containerRefs.company}
              className="relative"
              onMouseEnter={() => openDropdown("company")}
              onMouseLeave={() => delayedClose(120)}
              onFocus={() => openDropdown("company")}
              onBlur={() => handleContainerBlur("company")}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen === "company"}
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "company" ? null : "company")
                }
                className="flex items-center text-lg font-semibold group hover:text-light_primary focus:outline-none"
              >
                Company{" "}
                <ChevronDown
                  size={18}
                  className="ml-1 group-hover:rotate-180"
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-8 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden z-50 transform transition-all duration-150 ${
                  dropdownOpen === "company"
                    ? "opacity-100 pointer-events-auto scale-100"
                    : "opacity-0 pointer-events-none scale-95"
                }`}
                role="menu"
              >
                <Link
                  to="company/about"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  to="company/why-choose-us"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Why Choose Us
                </Link>
              </div>
            </div>

            {/* Services dropdown */}
            <div
              ref={containerRefs.services}
              className="relative"
              onMouseEnter={() => openDropdown("services")}
              onMouseLeave={() => delayedClose(120)}
              onFocus={() => openDropdown("services")}
              onBlur={() => handleContainerBlur("services")}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen === "services"}
                onClick={() =>
                  setDropdownOpen(
                    dropdownOpen === "services" ? null : "services"
                  )
                }
                className="flex items-center text-lg font-semibold group hover:text-light_primary focus:outline-none"
              >
                Services{" "}
                <ChevronDown
                  size={18}
                  className="ml-1 group-hover:rotate-180"
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-8 w-64 bg-white shadow-lg rounded-b-lg overflow-hidden z-50 transform transition-all duration-150 ${
                  dropdownOpen === "services"
                    ? "opacity-100 pointer-events-auto scale-100"
                    : "opacity-0 pointer-events-none scale-95"
                }`}
                role="menu"
              >
                <Link
                  to="services/student-visa"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Student Visa
                </Link>
                <Link
                  to="services/work-visa"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Work Permit Visa
                </Link>
                <Link
                  to="services/business-visa"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Business Visa
                </Link>
                <Link
                  to="services/visitor-visa"
                  role="menuitem"
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Visitor Visa
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-lg hover:text-light_primary font-semibold"
            >
              Contact
            </Link>
            <Link
              to="/book-consultation"
              className="text-lg hover:text-light_primary font-semibold"
            >
              Book A Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-light_primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  bg-gradient-to-b from-primary to-indigo-700 text-left shadow-lg  animate-slideDown">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {/* Home */}
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-[#d6eade] transition-colors duration-200"
            >
              Home
            </Link>

            {/* Company Accordion */}
            <details className="group">
              <summary className="w-full cursor-pointer py-1 text-lg text-white  font-medium flex items-center justify-between hover:text-[#d6eade] transition-colors">
                Company
                <span className="transform group-open:rotate-180 transition-transform">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="flex flex-col space-y-2 mt-2 animate-fadeIn">
                <Link
                  to="company/about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="company/why-choose-us"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Why Choose Us
                </Link>
              </div>
            </details>

            {/* Services Accordion */}
            <details className="group">
              <summary className="cursor-pointer py-1 text-lg text-white font-medium flex items-center justify-between  hover:text-[#d6eade] transition-colors">
                Services
                <span className="transform group-open:rotate-180 transition-transform">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="flex flex-col space-y-2 mt-2 animate-fadeIn">
                <Link
                  to="services/student-visa"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Student Visa
                </Link>
                <Link
                  to="services/work-visa"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Work Permit Visa
                </Link>
                <Link
                  to="services/business-visa"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Business Visa
                </Link>
                <Link
                  to="services/visitor-visa"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Visitor Visa
                </Link>
              </div>
            </details>

            {/* Other links */}
            <Link
              to="/contact"
              className="text-white text-lg font-medium hover:text-[#d6eade] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/book-consultation"
              className="text-white text-lg font-medium hover:text-[#d6eade] transition-colors"
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
