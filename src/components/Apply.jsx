import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Apply = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const opportunity = location.state || {};

    const [selectedResume, setSelectedResume] = useState(null);
    const [uploadedResume, setUploadedResume] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const existingResumes = [
        { id: 1, name: "Resume_Jan2025.pdf" },
        { id: 2, name: "Resume_Latest.pdf" },
        { id: 3, name: "Resume_DeveloperProfile.pdf" },
    ];

    const handleResumeUpload = (e) => {
        setUploadedResume(e.target.files[0]);
        setSelectedResume(null);
    };

    const handleResumeSelect = (resume) => {
        setSelectedResume(resume);
        setUploadedResume(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        if (!uploadedResume && !selectedResume) {
            alert("Please upload or select a resume before submitting.");
            return;
        }

        const data = {
            jobId: opportunity._id,
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            city: formData.get("city"),
            state: formData.get("state"),
            skills: formData.get("skills")?.split(",").map((skill) => skill.trim()),
            experience: formData.get("experience"),
            resume: uploadedResume ? uploadedResume.name : selectedResume.name,
        };

        try {
            await axios.post("http://localhost:5000/apply", data);
            console.log("Form Submitted Successfully");
            setModalVisible(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigate("/career");
    };

    return (
        <section className="bg-[#000a16] pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent mb-4">
                            {opportunity.title}
                        </h1>
                        <p className="text-gray-400 mb-6">{opportunity.description}</p>
                        <p className="font-semibold mb-6 text-gray-700">
                            <span className="text-white">Experience:</span>{" "}
                            <span className="text-gray-400">{opportunity.experience}</span>
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
                            What are the key skills required for this job?
                        </h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-400">
                            {opportunity.skills?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Form */}
                    <div className="flex-1 bg-[#0d1d34]/60 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent mb-6 text-center">
                            Apply For Job
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" name="firstName" placeholder="First Name" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                                <input type="text" name="lastName" placeholder="Last Name" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="email" name="email" placeholder="Email address" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                                <input type="text" name="phone" placeholder="Phone Number" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" name="state" placeholder="State" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                                <input type="text" name="city" placeholder="City" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" name="skills" placeholder="Skills" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                                <input type="text" name="experience" placeholder="Experience" required className="w-full sm:w-1/2 text-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pb-2" />
                            </div>

                            {/* Resume Upload */}
                            <div className="w-full">
                                <p className="text-gray-400 mb-2">Upload Resume (PDF only):</p>
                                <label className="w-full border-2 border-dashed border-gray-200 rounded-md p-4 cursor-pointer text-center bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent block">
                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        name="resume"
                                        className="hidden"
                                        onChange={handleResumeUpload}
                                    />
                                    {uploadedResume ? uploadedResume.name : "Click to Upload Resume"}
                                </label>
                            </div>

                            {/* Address */}
                            <div>
                                <input type="text" name="address" placeholder="Address" required className="w-full text-white border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full mt-6 bg-white border border-cyan-500 text-blue-500 py-2 rounded-full hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] hover:text-white transition duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-4">
                        <h3 className="text-xl font-semibold text-blue-500 mb-4">Details Submitted Successfully!</h3>
                        <p className="mb-4 text-gray-700">Thank you for applying. Our team will contact you shortly.</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] hover:text-white transition duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Apply;
