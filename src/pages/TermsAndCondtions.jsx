import { useState, useEffect } from "react";
import termsAndConditions from "../data/termsAndConditionsData";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleMenu = () => {
    // Menu toggle logic here if needed
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const toggleSubmenu = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]');
      let current = null;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 100) {
          current = section.id.replace('section-', '');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-white mt-20">
        {/* 🔵 Header */}
        <div className="w-full bg-gradient-to-b from-[#0b1220] to-[#0d1b3d] py-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">
            Terms & Conditions
          </h1>
        </div>

        {/* ⚪ Content */}
        <div className="bg-[#000a16] py-16 px-6 md:px-16  space-y-12">
          <div className="max-w-6xl mx-auto">
            {termsAndConditions.map((section) => (
              <section 
                id={`section-${section.id}`} 
                key={section.id}
                className="scroll-mt-32 group"
              >
                {/* Main Section Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center cursor-pointer hover:text-blue-400 transition-colors group-hover:text-blue-400" 
                    onClick={() => scrollToSection(section.id)}>
                  {section.id}. {section.heading}
                </h2>

                {/* Main Section Content */}
                {section.content && (
                  <div className="text-gray-300 text-base leading-relaxed mb-8 prose prose-invert max-w-none text-justify">
                    <p>{section.content}</p>
                  </div>
                )}

                {/* Submenu Sections - Accordion Style */}
                {section.submenu && (
                  <div className="space-y-6 border-t border-white/10 pt-8">
                    {section.submenu.map((sub) => (
                      <div 
                        key={sub.id} 
                        id={`section-${sub.id}`}
                        className="bg-black/30 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                      >
                        
                        <div className="text-gray-300 text-base leading-relaxed prose prose-invert max-w-none text-justify">
                          <p>{sub.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
