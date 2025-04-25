import ContactCard from "../components/ContactCard";

export default function PageThird() {
    return (
        <div className="bg-[#000a16] text-white">
      <div className="relative bg-[#000a16] text-white h-[740px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 lg:text-left order-2 lg:order-1 mt-20 lg:mt-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Ecommerce Solution 
            </h1>
            <p className="mt-4 sm:mt-6  sm:text-sm text-gray-400">
            End-to-End Ecommerce Platform for Store Management, Sales, and Payments
            </p>
          </div>
  
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-[500px] sm:max-w-[600px]">
              <img
                src="/m.png"
                alt="Dashboard preview on laptop"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-20">

                {/* Hero Section */}
                <section className=" text-white py-8 md:py-12 lg:py-16 space-y-16 lg:space-y-20">
                    {/* Top Section */}


                    {/* About the Project */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-[-100px]">
                        <div className="flex justify-center">
                            <img
                                src="/moc3.1.png"
                                alt="Order Tracking"
                                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">
                                About the <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Project</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                            This Ecommerce platform is a feature-packed and dynamic platform designed to give businesses full ownership of their online marketplace. The platform is designed to serve product vendors as well as end-users and provides an uninterrupted and scalable shopping experience over numerous categories and product types. The system is designed to handle intricate inventories, multi-level categories (main, sub, and child), tax settings, shipping options, and packaging choices. It also features strong functionality for vendor onboarding, verification management, and subscription tracking. With a secure dashboard, vendors can see earnings, manage product catalogs, handle bulk uploads, and monitor subscription statuses. Admins have access to extended role-based controls, detailed transaction records, withdrawal management, and unit-of-measure (UOM) settings.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                            The platform provides full operational visibility with utilities such as warehouse management, pickup locations, and background customization. Whether for small startups or big marketplaces, this project yields a full-stack eCommerce experience that's customizable, modern, and user-centered.
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
                            All-in-One Ecom Solution With Product Management, Vendor Tools, Category Hierarchy, Tax & Commission Tracking, Role-Based Access, Subscription Control, Shipping Options, Warehouse & Supply Management, UOM, Verifications, Bulk Uploads, Earnings Reports, and Full Marketplace Utilities.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "CRM", "Sales", "Order", "Purchase", "Expenses", "Total Earning", "Products", "Customers", "Vendors", "Bulk Product", "Product Catalogs", "Coupons", "Messages"
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
                                src="/moc3.2.png"
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
                                src="/moc3.3.png"
                                alt="Solutions Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>

                        {/* Right: Solutions Text */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                            This platform provides a full Ecommerce environment with all the tools necessary for running a marketplace. It facilitates product onboarding with fields for new products, deactivated products, catalogs, and bulk uploads. Handling categories is easy with support for main, sub, and child levels. Operations of vendors are made easy through features such as vendor lists, individual earnings (total, subscription, withdrawal, and commission), and detailed verification workflows (complete, pending, and required). The system features auto-tax calculations, subscription tracking, and utilities to handle shipping options, packaging, and pick-up locations. Administrators can create roles, warehouse tracking, supplies management, and UOM consistency for inventory. The default background and UI elements may be customized for branding purposes.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                            The core of the system ensures streamlined, real-time handling of the business from order fulfillment through vendor engagement, positioning it as one-stop eCommerce software. It's designed to meet today's marketplace requirements with flexibility, openness, and full control of administration.
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
