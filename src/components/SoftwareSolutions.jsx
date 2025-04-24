import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/Transport.png";
import img1 from "../assets/Inventory.png";
import img2 from "../assets/Ecommerce.png";
import img3 from "../assets/Warehouse.png";
import img4 from "../assets/Edtech.png";

// ✅ Solution Data with extra fields
const solutions = [
    {
        title: "Transport & Logistic Management Software",
        description: "Streamlining operations and optimizing efficiency in logistics management.",
        img: img,
        details: "This software provides route optimization, fleet tracking, and shipment visibility.",
        features: "Key features include GPS integration, real-time tracking, and automated billing.",
    },
    {
        title: "Inventory POS Solution",
        description: "Efficient inventory tracking and seamless point-of-sale management system.",
        img: img1,
        details: "Our POS system integrates with inventory for real-time stock updates.",
        features: "Includes barcode scanning, sales reporting, and multi-store management.",
    },
    {
        title: "Ecommerce Solution",
        description: "Comprehensive eCommerce platform for seamless shopping and management.",
        img: img2,
        details: "This solution supports online catalogs, carts, and secure checkout.",
        features: "Mobile optimization, customer reviews, and multi-payment options.",
    },
    {
        title: "Warehouse Management Software",
        description: "Optimizing inventory flow and enhancing warehouse operational efficiency.",
        img: img3,
        details: "Helps with order picking, receiving, and restocking.",
        features: "Includes RFID scanning, bin tracking, and analytics dashboards.",
    },
    {
        title: "EdTech Solution & School Management Software",
        description: "Empowering education with streamlined management and digital learning tools.",
        img: img4,
        details: "Supports attendance tracking, grading, and course management.",
        features: "Includes e-learning modules, parent portals, and timetable generation.",
    },
];

// 🎴 Card Component
const SolutionCard = ({ title, description, img, onViewClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ scale: 1, opacity: 1, transition: { duration: 0.1, ease: "easeInOut" } });
        } else {
            controls.start({ scale: 0.95, opacity: 0 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-4xl lg:max-w-7xl p-3 sm:p-4 md:p-6 border-grey-800 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-[#1F2235]"
        >
            <div className="flex flex-row justify-between items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3 flex-1 min-w-[250px]">
                    <img
                        src={img}
                        alt="software"
                        className="rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-white">{title}</h3>
                        <p className="text-xs text-gray-400">{description}</p>
                    </div>
                </div>
                <button
                    onClick={onViewClick}
                    className="px-4 py-1.5 sm:px-5 sm:py-2 border border-blue-500 text-blue-500 text-xs sm:text-sm rounded mt-3 sm:mt-0 hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] hover:text-white transition"
                >
                    View
                </button>
            </div>
        </motion.div>
    );
};

// 🔧 Main Section Component
export default function SolutionsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section className="mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 bg-[#010101]">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.span
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
                    >
                        <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
                            Effortless Tech
                        </span>
                    </motion.span>

                    <motion.h2
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
                    >
                        <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
                            Software
                        </span>{" "}
                        Solution
                    </motion.h2>

                    <motion.p
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="mt-3 md:mt-4 text-gray-400 max-w-[740px] mx-auto text-sm sm:text-sm"
                    >
                        Empowering businesses with innovative, scalable, and user-friendly software solutions, crafted to streamline operations, enhance productivity, optimize performance, and drive digital transformation across diverse industries and sectors
                    </motion.p>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            {...solution}
                            onViewClick={() => handleViewClick(solution)}
                        />
                    ))}
                </div>
            </section>

            {/* 💬 Modal */}
            {selectedProject && (
                <div className="fixed inset-0  bg-opacity-60 flex items-center justify-center z-50 px-4">
                    <div className="bg-white text-black rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-1 text-gray-500 hover:text-black text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProject.img}
                            alt={selectedProject.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
                        <p className="mb-2">{selectedProject.description}</p>
                        {selectedProject.details && (
                            <p className="text-sm text-gray-700 mb-2">
                                <strong>Details:</strong> {selectedProject.details}
                            </p>
                        )}
                        {selectedProject.features && (
                            <p className="text-sm text-gray-700">
                                <strong>Features:</strong> {selectedProject.features}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
