import React from "react";
import { motion } from "framer-motion";
import indiaIcon from "../assets/india.png";
import usaIcon from "../assets/usa.png";
import canadaIcon from "../assets/canada.png";
import logo from "../assets/logo.png";
import ContactCard from "./ContactCard";

const ContactUs = () => {
    return (
        <div className="bg-[#010101] text-white pt-28 pb-15 px-4 md:px-8 lg:px-20 min-h-screen">
            {/* Main Heading Section */}
            <div className="max-w-7xl mx-auto text-center mb-16 mt-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                    We would love to hear from you, please fill in the form below or mail us your requirements on info@bluewebspark.com & hr@bluewebspark.com
                </p>
            </div>

            {/* Contact Form Section */}
            {/* <section className="max-w-7xl mx-auto bg-gradient-to-r from-[#0F1B3D] to-[#0C0B1F] rounded-xl border border-gray-700 overflow-hidden mb-20">
                <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                    {/* Left Text Column */}
                    {/* <div className="flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-6">
                            We'd love to hear from you.<br />
                            Let's build something great together.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Looking to start a project or need more details about our services? Complete the form below, and our team will reach out to you soon. At Blueswepspark, we're committed to listening, collaborating, and bringing your digital ideas to life — whether you're starting from scratch or enhancing your existing systems. We're here to help every step of the way.
                        </p>
                    </div>

                    {/* Right Form Column */}
                    {/* <div className="bg-[#0F1B3D]/50 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 bg-[#0F1B3D] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-[#0F1B3D] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Contact Number"
                                    className="w-full px-4 py-3 bg-[#0F1B3D] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <select
                                    className="w-full px-4 py-3 bg-[#0F1B3D] border border-gray-600 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Select a Budget Range</option>
                                    <option>$0 - $5,000</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>$10,000+</option>
                                </select>
                                <textarea
                                    placeholder="Note"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-[#0F1B3D] border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium py-3 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div> */} 
            {/* // </section> */}

            <div className="pb-15">
                <ContactCard/>
            </div>

            {/* Global Presence Section */}
            <section className="max-w-full mx-auto mb-[-60px]">
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
                            <p className="text-sm">Apollo Premier, Office No. 411,  4th floor  Vijay Nagar Square, Vijay Nagar 452010 Madhya Pradesh</p>
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
                                United States</p>
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
                            <p className="text-sm">120 Pembina Rd 140, Sherwood Park, AB T8H 0M2, Canada</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ContactUs;
