import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Apply = () => {

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();  // Initialize the navigate function
    const opportunity = location.state || {};

    // State to manage resume upload or selection
    const [selectedResume, setSelectedResume] = useState(null);
    const [uploadedResume, setUploadedResume] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);  // Modal visibility state

    // Dummy existing resumes list (In real app, fetch from server)
    const existingResumes = [
        { id: 1, name: "Resume_Jan2025.pdf" },
        { id: 2, name: "Resume_Latest.pdf" },
        { id: 3, name: "Resume_DeveloperProfile.pdf" },
    ];

    const handleResumeUpload = (e) => {
        setUploadedResume(e.target.files[0]);
        setSelectedResume(null); // clear selected if uploading new
    };

    const handleResumeSelect = (resume) => {
        setSelectedResume(resume);
        setUploadedResume(null); // clear upload if selecting existing
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Show the modal after successful submission
        setModalVisible(true);
    };

    // Close modal and navigate to career page
    const handleCloseModal = () => {
        setModalVisible(false); // Close the modal
        navigate('/career');  // Redirect to career page
    };

    return (
        <section className="mt-24 bg-[#000a16]">
            <div className="min-h-screen px-30  flex flex-col md:flex-row p-10 gap-10 ">
                {/* Left Section - Job Description */}
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent mb-4">{opportunity.title}</h1>
                    <p className="text-gray-700 mb-6"><span className="text-gray-400">{opportunity.description}</span></p>
                    <p className="font-semibold mb-6 text-gray-700">
                        <span className="text-white">Experience:</span> <span className="text-gray-400">{opportunity.experience}</span>
                    </p>

                    <h2 className="text-[29px] font-semibold mb-4 bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">What are the key skills required for this job?</h2>
                    <ul className="list-decimal list-inside space-y-2 text-gray-400">
                        {opportunity.skills?.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent mb-6 text-center">Apply For Job</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                        <div className="flex gap-4">
                            <input type="text" placeholder="First Name" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                            <input type="text" placeholder="Last Name" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                        </div>
                        <div className="flex gap-4">
                            <input type="email" placeholder="Email address" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                            <input type="text" placeholder="Phone Number" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="State" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                            <input type="text" placeholder="City" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Skills" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                            <input type="text" placeholder="Experience" className="w-1/2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                        </div>

                        {/* Resume Upload or Select */}
                        <div>
                            <p className="text-gray-600 mb-2">Upload Resume or Select from Gallery:</p>
                            <div className="flex flex-col gap-4">
                                {/* Upload new resume */}
                                <label className="border-2 border-dashed border-cyan-500 rounded-md p-4 cursor-pointer text-center text-cyan-600">
                                    <input type="file" className="hidden" onChange={handleResumeUpload} />
                                    {uploadedResume ? uploadedResume.name : "Click to Upload Resume"}
                                </label>

                                {/* OR Choose from gallery */}
                                {/* <div className="grid grid-cols-2 gap-3">
                  {existingResumes.map((resume) => (
                    <div
                      key={resume.id}
                      className={`p-3 border rounded cursor-pointer ${selectedResume?.id === resume.id ? "bg-cyan-100 border-cyan-500" : "border-gray-300"}`}
                      onClick={() => handleResumeSelect(resume)}
                    >
                      <p className="text-sm text-gray-700">{resume.name}</p>
                    </div>
                  ))}
                </div> */}

                                {/* Selected Resume Info */}
                                {/* {selectedResume && (
                  <p className="text-green-600 mt-2 text-sm">Selected Resume: {selectedResume.name}</p>
                )} */}
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <input type="text" placeholder="Address" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 pb-2" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full mt-6 bg-white border border-cyan-500 text-cyan-500 font-semibold py-2 rounded-full hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] hover:text-white transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-cyan-500 mb-4">Details Submitted Successfully!</h3>
                        <p className="mb-4 text-gray-700">Thank you for applying. Our team will contact you shortly.</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition duration-300"
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
