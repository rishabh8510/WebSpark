import ContactCard from "../components/ContactCard";

export default function PageFirst() {
    return (
        <div className="bg-[#000a16] text-white">
            {/* Hero Section with responsive background */}
            <div
                className="relative w-full h-auto min-h-[530px] bg-[#000a16] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:mt-26 pt-40 sm:pt-28 lg:pt-[230px] lg:mb-[150px] pb-10 sm:pb-14"
                style={{ backgroundImage: "url('/bg1.png')" }}
            >
                {/* Content that remains visible on all screens */}
                <div className="text-white max-w-xl ml-8 lg:ml-32">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                        Transport & Logistic<br />Management Software
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Comprehensive Solution for Managing Transport, Logistics, and Fleet Operations
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* About the Project Section */}
                <section className="text-white p-8 md:p-16 pt-32 space-y-24 lg:mt-[100px]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-[-100px]">
                        <div className="flex justify-center">
                            <img
                                src="/moc1.png"
                                alt="Order Tracking"
                                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">
                                About the <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Project</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                The Transport & Logistic Management Software is an integrated, powerful platform created to handle the entire range of logistics and transportation operations. It allows businesses to automate and digitize key functions like dispatch scheduling, load tracking, employee attendance, vehicle and trailer management, and HR functions. With real-time tracking and access to centralized data, companies can effectively handle their fleet, drivers, customer interactions, and delivery processes. The software also has compliance capabilities such as safety inspections, maintenance management, and fuel consumption tracking by unit and geolocation. Its scalable design supports businesses of any size, ranging from small carriers to large-scale logistics networks. The platform strives to minimize operational bottlenecks, improve visibility, and enable informed decision-making.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                With its modular architecture and intuitive interface, the software enhances overall coordination, minimizes manual errors, and offers a clever solution to promote efficiency, accountability, and profitability in today's fast-paced transport and logistics scenario.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features & Solutions Section */}
                <section className="py-16 space-y-24">
                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Text + Feature Buttons */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Features</h2>
                            <p className="text-gray-300 mb-10 text-sm text-justify">
                                A Flexible, Enterprise-Class Feature Set Built to Maximize End-to-End Transport and Logistics Activities—From Dispatch, Load Management, Fleet & Workforce Scheduling to Financial Control, Compliance, and Strategic Reporting in order to Increase Efficiency, Accuracy, and Growth.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "Attendance", "Dispatch Board", "Active Leads", "Assets", "Leads", "Trips",
                                    "HR", "IFTA", "Accounting", "Safety", "Asset Tracking", "Mgmt Report",
                                    "Container Yard", "CrossDock", "Tools", "Reports", "Custom Clearance"
                                ].map((item) => (
                                    <button
                                        key={item}
                                        className="flex items-center gap-2 bg-[#1D1C2E] text-sm py-2 px-3 rounded hover:bg-[#2E2D42] transition text-left"
                                    >
                                        <img src="/p.png" alt="" className="w-4 h-4" />
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Features Image */}
                        <div className="flex justify-center mt-20">
                            <img
                                src="/moc2.png"
                                alt="Feature Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Solutions Image */}
                        <div className="flex justify-center h-[350px]">
                            <img
                                src="/moc1.png"
                                alt="Solutions Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>

                        {/* Right: Solutions Text */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                The Transport & Logistic Management Software provides an integrated set of solutions that is aimed at fulfilling the dynamic requirements of contemporary logistics companies. It comprises smart dispatch boards, real-time tracking of loads and orders, scheduling of drivers and employees, and attendance. Customers, shippers, receivers, suppliers, and carriers can be managed by users effectively through specialized modules. Some of the key features are invoicing, trip accounting, payroll tracking, verification of sales, pending payment hours, and loss/profit reporting. The system also accommodates document management, late delivery reports, and order snapshots for enhanced operational transparency. With integrated security groups, permission settings, and HR policy enforcement, the software guarantees regulatory compliance and secure access.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                It also facilitates route optimization through order lane management and monitors fuel consumption both by unit and location. From handling border orders to tracking security compliance, this solution provides logistics companies with what they require to streamline operations, enhance transparency, and grow rapidly in a challenging marketplace.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* Contact Section */}
            <ContactCard />
        </div>
    );
}