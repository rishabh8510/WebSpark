import React from "react";
import { useEffect } from "react";
// import { motion } from "framer-motion";
import AssociatePartner from "./AssociatePartner";
import Opportunities from "./Opportunities";


const opportunities = [
    {
        title: "B2B Marketing Specialist",
        description:
            "A B2B Marketing Specialist having 1 to 3 years of prior work experience, who can join us and help us...",
        joinDuration: "15 Days",
        location: "Indore",
        experience: "6 Months - 1 Year",
        openings: "1 Opening",
    },
    {
        title: "Associate Software Developer",
        description:
            "Associate Software Developer who can help us out with developing, implementing, integrating and managing applications on a broad spectrum of...",
        joinDuration: "30 Days",
        location: "Indore",
        experience: "6 Months - 1 Year",
        openings: "1 Opening",
    },
    {
        title: "Business Development Executive (BDE)",
        description:
            "BDE required who can help us with generating business through online portals like Upwork, Freelancer and driving company sales by...",
        joinDuration: "30 Days",
        location: "Indore",
        experience: "0 Year - 2 Years",
        openings: "1 Opening",
    },
];

const career = () => {
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);
    return (

        <section className="py-12 bg-[#000a16]">
            <div>
                <div
                    className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
                    style={{ backgroundImage: "url('/Career.jpg')" }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0  opacity-60"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-black text-5xl font-semibold">Career</h1>
                    </div>
                </div>
            </div>
  <Opportunities/>
  <div className="text-white text-center mt-5"><p className="text-4xl font-semibold">Our Group of Companies</p></div>
   <div className="mt-[-50px]">
   <AssociatePartner/>
   </div>


        </section>
    );
};

export default career;
