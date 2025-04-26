import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../assets/Transport.png";
import img1 from "../assets/Inventory.png";
import img2 from "../assets/Ecommerce.png";
import img3 from "../assets/Warehouse.png";
import img4 from "../assets/Edtech.png";

// 🧠 Solution Data
const solutions = [
    {
        id: "transport",
        title: "Transport & Logistic Management Software",
        description: "Streamlining operations and optimizing efficiency in logistics management.",
        img: img,
    },
    {
        id: "inventory",
        title: "Inventory POS Solution",
        description: "Efficient inventory tracking and seamless point-of-sale management system.",
        img: img1,
    },
    {
        id: "ecommerce",
        title: "Ecommerce Solution",
        description: "Comprehensive eCommerce platform for seamless shopping and management.",
        img: img2,
    },
    {
        id: "warehouse",
        title: "Warehouse Management Software",
        description: "Optimizing inventory flow and enhancing warehouse operational efficiency.",
        img: img3,
    },
    {
        id: "edtech",
        title: "EdTech Solution & School Management Software",
        description: "Empowering education with streamlined management and digital learning tools.",
        img: img4,
    },
];

// 🧩 Card Component
const SolutionCard = ({ title, description, img, id }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });
    const controls = useAnimation();
    const navigate = useNavigate();

    useEffect(() => {
        if (inView) {
            controls.start({ scale: 1, opacity: 1, transition: { duration: 0.2 } });
        } else {
            controls.start({ scale: 0.95, opacity: 0 });
        }
    }, [inView, controls]);

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to top on click
        navigate(`/solution/${id}`);
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-4xl lg:max-w-7xl p-4 border border-[#1F2235] rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-[#0F111C]"
        >
            <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-[250px]">
                    <img
                        src={img}
                        alt={title}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                    <div>
                        <h3 className="font-semibold text-md text-white">{title}</h3>
                        <p className="text-sm text-gray-400">{description}</p>
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    className="w-full md:w-auto px-5 py-2 border border-blue-500 text-blue-500 text-sm rounded hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] hover:text-white transition"
                >
                    View
                </button>
            </div>
        </motion.div>
    );
};

// 🧱 Main Section
export default function SolutionsSection() {
    return (
        <section className="mt-16 px-4 sm:px-6 lg:px-8 bg-[#010101]">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.span
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
                >
                    <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
                        Effortless Tech
                    </span>
                </motion.span>

                <motion.h2
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-4 text-4xl font-semibold text-white"
                >
                    <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
                        Software
                    </span>{" "}
                    Solution
                </motion.h2>

                <motion.p
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm"
                >
                    Empowering businesses with innovative, scalable, and user-friendly software solutions, crafted to streamline operations, enhance productivity, and drive digital transformation.
                </motion.p>
            </div>

            {/* Cards */}
            <div className="flex flex-col items-center gap-6">
                {solutions.map((solution) => (
                    <SolutionCard key={solution.id} {...solution} />
                ))}
            </div>
        </section>
    );
}
