import ContactCard from "../components/ContactCard";

export default function PageFive() {
    return (
        <div className="bg-[#000a16] text-white overflow-x-hidden pt-16 md:pt-20 lg:mt-[-80px]">
            {/* Hero Section */}
            <div className="relative bg-[#000a16] text-white h-[740px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 lg:text-left order-2 lg:order-1 mt-20 lg:mt-0">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            Warehouse <br />Management <br />System
                        </h1>
                        <p className="mt-4 sm:mt-6  sm:text-sm text-gray-400">
                            Efficient Warehouse Management for Inventory Tracking, Fulfillment, and Reporting
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="w-full max-w-[500px] sm:max-w-[600px]">
                            <img
                                src="/mainbg.png"
                                alt="Dashboard preview on laptop"
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {/* About the Project */}
                <section className="text-white py-8 md:py-12 lg:py-16 space-y-16 lg:space-y-20 lg:mr-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src="/moc5.1.png"
                                alt="Order Tracking"
                                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">
                                About the <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Project</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                The Warehouse Management System is a powerful, scalable solution to automate and centralize the processes of contemporary warehouse facilities. Optimized for efficiency and accuracy, this system allows businesses to manage inventory, warehouse operations, and member-specific logistics in one system. It accommodates allocating exclusive inventories and warehouses to individual members to have personalized control over stock levels and fulfillment processes. The platform streamlines member management, monitoring their sales, shipment orders, and fulfillment status in real-time. It's meant to cut out manual processes, errors, and increase productivity through automation and smart organization. The system also includes robust tools for product management, label generation, rate card handling, and sales order processing.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                With integrated support ticketing and real-time reporting, users can easily view sales information, shipment status, and invoices. Perfect for companies that want to streamline warehouse operations, this platform offers a comprehensive, easy-to-use backend for intelligent logistics management.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features & Solutions Section */}
                <section className="py-12 md:py-16 space-y-16 lg:space-y-20">
                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start lg:ml-16">
                        {/* Left: Text + Feature Buttons */}
                        <div className="ml-0 lg:ml-8 xl:ml-12">
                            <h2 className="text-4xl font-bold mb-4">Features</h2>
                            <p className="text-gray-300 mb-6 md:mb-10 text-sm text-justify">
                                Detailed Warehouse Management with Member Inventory, Fulfillment Orders, Sales Tracking, Shipment Handling, Product Management, Label & Rate Control, Role-Based Access, Ticket Support, Real-Time Reports, and Invoice Generation for Scalable, Efficient Logistics and Member-Focused Operations.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mr-4 lg:mr-8">
                                {[
                                    "Members Inventory", "Member Warehouse", "Shipment Orders", "Fullfillment Order", "Sales", "Product Managers", "Manage Labels", "Manage Rates", "Tickets", "Reports", "Invoices", "product Catagories"
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
                        <div className="flex justify-center mt-8 md:mt-12 mr-0 lg:mr-8 xl:mr-12">
                            <img
                                src="/moc5.2.png"
                                alt="Feature Dashboard"
                                className="rounded-lg w-full max-w-[500px] md:max-w-[600px] shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center lg:mr-15">
                        {/* Left: Solutions Image */}
                        <div className="flex justify-center h-auto md:h-[350px] ml-0 lg:ml-8 xl:ml-12 ">
                            <img
                                src="/moc5.3.png"
                                alt="Solutions Dashboard"
                                className="rounded-lg w-full max-w-[500px] md:max-w-[600px] shadow-lg"
                            />
                        </div>

                        {/* Right: Solutions Text */}
                        <div className="mr-0 lg:mr-8 xl:mr-12 ">
                            <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                This Warehouse Management System provides an integrated set of tools for effective warehouse management and member-based logistics. It allows companies to control members' inventory and warehouse space, monitor shipment and fulfillment orders, and automate sales processes from a centralized platform. With an effective product management module, users can add, update, and manage inventory with ease. The system enables label printing, rate management, and ticket processing to ensure smooth communication and service resolution. Admins can delegate roles, track warehouse utilization, and manage order fulfillment in real-time. Sales reporting and invoice generation functionality ensures transparent financial information, accurate and timely billing.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                This solution not only enhances warehouse visibility and tracking but also optimizes customer service through effective order processing and personalized member management. It's a perfect system for companies seeking to improve operational efficiency, ensure accuracy of records, and expand logistics capacity with complete control and transparency.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Contact */}
            <ContactCard />
        </div>
    );
}