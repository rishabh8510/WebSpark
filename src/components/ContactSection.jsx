import React from "react";
import { motion } from "framer-motion";
import indiaIcon from "../assets/india.png";
import usaIcon from "../assets/usa.png";
import canadaIcon from "../assets/canada.png";
import logo from "../assets/logo.png";

const ContactSection = () => {
  return (
    <div className="bg-[#010101] text-white py-12 px-4 md:px-20 mt-[-150px] lg:mt-[-100px]">
      <div className="max-w-full mx-auto mb-[-50px]">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[linear-gradient(229deg,_rgba(0,0,0,1)_0%,_rgba(0,102,255,1)_53%,_rgba(0,0,0,1)_100%)] rounded-xl p-8 mb-16 shadow-lg max-w-[1250px] mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-3xl font-semibold"
            >
              Our Global Presence
            </motion.h2>
            <motion.img
              src={logo}
              alt="Blueweb Spark Technologies"
              className="w-40 h-10"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            {/* India */}
            <motion.div
              className="space-y-4"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={indiaIcon}
                alt="India"
                className="mx-auto h-16"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-medium border-t border-white pt-2">INDIA</h3>
              <p className="text-sm">903, NRK Business Park Scheme No. 54, Vijay Nagar Square Indore, Madhya Pradesh (452011)</p>
            </motion.div>

            {/* USA */}
            <motion.div
              className="space-y-4"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={usaIcon}
                alt="USA"
                className="mx-auto h-16"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-medium border-t border-white pt-2">USA</h3>
              <p className="text-sm">5101 Santa Monica Blvd Ste 8  1304,
                Los Angeles, CA 90029,
                United States</p>
            </motion.div>

            {/* Canada */}
            <motion.div
              className="space-y-4"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={canadaIcon}
                alt="Canada"
                className="mx-auto h-16"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-medium border-t border-white pt-2">CANADA</h3>
              <p className="text-sm">120 Pembina Rd 140, Sherwood Park, AB T8H 0M2, Canada</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
