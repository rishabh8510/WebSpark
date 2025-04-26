import React from "react";
import { useNavigate } from "react-router-dom";

const opportunities = [
  {
    id: 1,
    title: "B2B Marketing Specialist",
    description:
      "A B2B Marketing Specialist having 1 to 3 years of prior work experience, who can join us and help us out with the development and management of B2B marketing programs, strategies, execution, and results",
    joinDuration: "15 Days",
    location: "Indore",
    experience: "6 Months - 1 Year",
    openings: "1 Opening",
    skills: [
      "Strong communication skills and ability to build relationships.",
      "B2B Marketing",
      "Marketing Campaigns",
      "Market Research",
      "Knowledge of Salesforce (or any other SaaS-based company) can be a plus.",
      "Demand Generation and Lead Conversation",
      "PPC and Paid Campaigns",
      "Content Creation",
      "Self-starting and competent to work without continual supervision.",
      "Passionate about building connections and networking.",
      "A curious learner with a growth mindset.",
      "Organizational and time-management skills",
    ],
  },
  {
    id: 2,
    title: "Associate Software Developer",
    description:
      "We are looking for an enthusiastic Associate Software Developer who can help us out with developing, implementing, integrating, and managing applications across a broad spectrum of technologies.",
    joinDuration: "30 Days",
    location: "Indore",
    experience: "6 Months - 1 Year",
    openings: "1 Opening",
    skills: [
      "Good understanding of Object Oriented Programming (OOPs) concepts.",
      "Strong analytical and problem-solving skills.",
      "Knowledge of Web Development (HTML, CSS, JavaScript).",
      "Familiarity with frameworks like React, Angular, or Vue.js.",
      "Backend knowledge with Node.js, Django, or any backend framework.",
      "Database concepts: SQL/NoSQL basics.",
      "Strong understanding of REST APIs.",
      "Good communication and collaboration skills.",
      "Self-motivated and willing to learn new technologies.",
      "Understanding of Git version control system.",
    ],
  },
  {
    id: 3,
    title: "Business Development Executive (BDE)",
    description:
      "We are seeking a Business Development Executive who can generate business through online portals like Upwork, Freelancer and drive the company's sales growth by finding new business opportunities and maintaining client relationships.",
    joinDuration: "30 Days",
    location: "Indore",
    experience: "0 Year - 2 Years",
    openings: "1 Opening",
    skills: [
      "Excellent written and verbal communication skills.",
      "Experience with online bidding platforms like Upwork, Freelancer, Fiverr, etc.",
      "Lead generation and client relationship management.",
      "Understanding of IT services and software sales.",
      "Ability to work independently and as a part of a team.",
      "Basic understanding of proposal writing and project estimation.",
      "Email marketing and cold calling skills.",
      "Negotiation and persuasion skills.",
      "Market research and analysis.",
      "Good knowledge of CRM tools.",
    ],
  },
];


const Opportunities = () => {
  const navigate = useNavigate();

  const handleApply = (opportunity) => {
    navigate("/apply", { state: opportunity });
  };

  return (
    <section className="py-12 bg-[#000a16]">
      <div>
        <h2 className="text-4xl font-semibold text-center mb-10 text-white mt-10">
          Opportunities
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="w-[410px] border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition border-gray-400"
            >
              <div>
                <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
                  {opportunity.title}
                </h3>
                <p className="mb-6 text-white">{opportunity.description}</p>
                <div className="text-gray-600 space-y-2 flex justify-between">
                  <div>
                    <p>
                      <span className="font-semibold text-white">Join duration:</span>{" "}
                      <span className="text-gray-400">{opportunity.joinDuration}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-white">Location:</span>{" "}
                      <span className="text-gray-400">{opportunity.location}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold text-white">Openings:</span>{" "}
                      <span className="text-gray-400">{opportunity.openings}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-white mt-6">
                  <span className="font-semibold text-white">Experience:</span>
                  <span className="text-gray-400"> {opportunity.experience}</span>
                </p>
                <button
                  onClick={() => handleApply(opportunity)}
                  className="mt-6 self-start bg-white border border-cyan-500 text-cyan-500 px-6 py-1 rounded-full hover:bg-cyan-500 hover:text-white transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
