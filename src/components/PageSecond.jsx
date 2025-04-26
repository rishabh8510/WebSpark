import ContactCard from "../components/ContactCard";

export default function PageSecond() {
    return (
        <div className="bg-[#000a16] text-white">
      <div className="relative bg-[#000a16] text-white h-[740px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2  lg:text-left order-2 lg:order-1 mt-20 lg:mt-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Inventory <br />
            POS Solution 
            </h1>
            <p className="mt-4 sm:mt-6  sm:text-sm text-gray-400">
            Complete POS System for Inventory Management, Sales, and Reporting
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

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-20">
                {/* Hero Section */}
                <section className="text-white py-8 md:py-12 lg:py-16 space-y-16 lg:space-y-20 lg:mr-24">
                    {/* About the Project */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-[-100px]">
                        <div className="flex justify-center">
                            <img
                                src="/moc2.1.png"
                                alt="Order Tracking"
                                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">
                                About the <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Project</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                Smart Inventory POS is a sophisticated and easy-to-use business management tool that streamlines complex business functions. Specifically designed for small to medium enterprises, it integrates inventory management, point-of-sale (POS), customer relationship management (CRM), and reporting tools into a single system. The software strives to minimize manual labor, avoid errors, and enhance operational efficiency. Its user-friendly interface enables organizations to handle sales, purchases, customers, and stock with minimum training. With capabilities that suit both retail and wholesale businesses, Smart Inventory POS enables informed decision-making through the use of real-time data. Whether operating one store or multiple locations, this system provides improved stock visibility, accelerated transactions, and an enhanced workflow.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                It is designed with scalability in mind, which allows it to scale up with your business. From tracking sales to financial analysis, Smart Inventory POS is an end-to-end solution for businesses looking to increase productivity and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features & Solutions Section */}
                <section className="py-16 space-y-24">
                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-12 items-start lg:ml-16">
                        {/* Left: Text + Feature Buttons */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Features</h2>
                            <p className="text-gray-300 mb-10 text-sm text-justify">
                                A full-fledged POS and inventory system with sales, quotations, subscriptions, stock control, CRM, HRM, loyalty programs, reports, data import/export, financial tracking, product management, warehouse tools, and client support to streamline and scale business operations efficiently.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "Sales", "Stock", "CRM", "Project", "Accounts", "Promo Code", 
                                    "Data & Reports", "Loyalty Program", "Quotes", "Subscription", 
                                    "Credit Notes", "Product Categories", "Stock Transfer", 
                                    "Purchase Order", "Stock Retrun", "Supplies"
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
                                src="/moc2.2.png"
                                alt="Feature Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="grid md:grid-cols-2 gap-12 items-center lg:mr-15">
                        {/* Left: Solutions Image */}
                        <div className="flex justify-center h-[350px]">
                            <img
                                src="/moc2.3.png"
                                alt="Solutions Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>

                        {/* Right: Solutions Text */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                                The Smart Inventory POS solution provides an extensive set of features to run your business end-to-end. It supports major modules like POS sales, quotations, subscriptions, sales returns, credit notes, and purchase orders. Inventory is taken care of using item tracking, product categorization, warehouse management, stock transfers, returns, and supplier management. Companies can create product labels and leverage CRM features like client grouping, support tickets, and promo codes to increase customer interaction. For performance insights, it offers robust reports such as business registers, statements, profit analysis, income vs expenses, trending products, top customers, and graphical summaries. The gift card integration and loyalty program ensure repeat business. 
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                                HRM tools make employee management easier, while import/export functionality ensures seamless data handling for people, products, transactions, and statements. Database backup and bulk import of customers/products features ensure data security and continuity of operations. All of these applications combined offer an intelligent, scalable, and cost-effective business solution.
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