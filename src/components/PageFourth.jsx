import ContactCard from "../components/ContactCard";

export default function PageFourth() {
    return (
        <div className="bg-[#000a16] text-white">
            <div
                                 className="relative w-full h-auto min-h-[530px] bg-[#000a16] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:mt-26 pt-40 sm:pt-28 lg:pt-[100px] lg:mb-[150px] pb-10 sm:pb-14"
                                 style={{ backgroundImage: "url('/bg4.png')" }}
            >
                              <div className="max-w-7xl mx-auto">
                    <div className="text-white max-w-xl ml-4 lg:ml-40 mt-8 lg:mt-12">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                        EdTech Solution &<br />School Management<br /> Software
                        </h1>
                        <p className="text-gray-400 text-sm">
                        Streamlined Platform for Managing Courses, Students, Exams, and School Operations.
                        </p>
                    </div>
                </div>
                {/* Left Text Section */}
   

                {/* Right Image Section */}

            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Hero Section */}
                <section className=" text-white p-8 md:p-16 pt-32 space-y-24 lg:mt-[100px]">
                    {/* Top Section */}


                    {/* About the Project */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src="/moc4.1.png"
                                alt="Order Tracking"
                                className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">
                                About the <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Project</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                            EdTech Solution and School Management Software is an all-around digital learning and administration platform that aims to transform educational institutions' and independent teachers' management and delivery of content. Developed with contemporary learning patterns in mind, the solution integrates online course delivery, student engagement tools, and school administration into a single efficient system. It enables institutions, teachers, and tutors to design, organize, and market interactive courses and monitor students' progress and performance. It also enables classroom and examination scheduling, student attendance tracking, and communication for teachers, students, and parents. For schools, coaching centers, or independent instructors, it offers the ability to run academic and non-academic functions online.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                            With its user-friendly interface and scalable architecture, the software provides seamless learning experiences, efficient administration, and improved collaboration—making it a perfect solution for the changing face of education.
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
                            Integrated EdTech and School Management Solution for Online Delivery of Courses, Student Engagement, Attendance, Fees, Exam Timing, Teacher Management, Progress Reporting, Certification, Communication, and Scalable Solutions to Automate Educational Administration for Better Learning Results.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "Sales", "Stock", "CRM", "Project", "Accounts", "Promo Code", "Data & Reports", "Loyalty Program"
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
                                src="/moc4.2.png"
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
                                src="/moc4.3.png"
                                alt="Solutions Dashboard"
                                className="rounded-lg w-full max-w-[600px] shadow-lg"
                            />
                        </div>

                        {/* Right: Solutions Text */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                            <p className="text-gray-300 mb-4 text-sm text-justify">
                            The EdTech Solution and School Management Software provides a one-stop solution to handle educational content, school management, and student engagement. Teachers can simply upload and organize video lectures, assignments, quizzes, and study materials and provide real-time performance analysis and certification. The platform provides student dashboards, live classes, notifications, and progress tracking to facilitate self-paced and instructor-led learning. For school administration, functionality such as admission management, attendance monitoring, timetable scheduling, exam management, and fee handling provide for efficient day-to-day operations. Parents and students are able to access a linked experience through announcements, results, and communication facilities.
                            </p>
                            <p className="text-gray-300 text-sm text-justify">
                            The software also offers tools for managing teacher roles, producing academic reports, and integrating payment gateways for course and fee payments. With mobile-friendly access and scalable functionality, the solution appeals to schools, coaching centers, and solo educators looking to provide quality education while streamlining back-office operations. It's a future-proof platform designed to support education at all levels.
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
