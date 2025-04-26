import React from "react";
import { motion } from "framer-motion";

const partners = [
    {
        name: "Think Aisle",
        logo: "/ThinkAisle.png",
    },
    {
        name: "Pinio",
        logo: "/Pinio.png",
    },
    {
        name: "Iventurs",
        logo: "/Kenowella.jpg", // Note: Logo property doesn't match name
    },
    {
        name: "Trucking Techs",
        logo: "/TruckingTechs.png",
    },
];

const AssociatePartner = () => {
    return (

        <section className="py-12 bg-[#000a16]">


            <div className="mt-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.2 + 0.3,
                                    },
                                }}
                                viewport={{
                                    amount: 0.3,
                                    once: false,
                                }}
                                className="bg-[#120f23] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300"
                                style={{
                                    width: "290px",
                                }}
                            >
                                <div className="bg-white rounded-xl w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[80%] object-contain"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/default-logo.png"; // Add a fallback image
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default AssociatePartner;
