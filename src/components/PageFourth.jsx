import ContactCard from "../components/ContactCard";

export default function PageFourth() {
  return (
    <div className="bg-[#000a16] text-white">
      <div className="relative bg-[#000a16] text-white h-[740px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2  lg:text-left order-2 lg:order-1 mt-20 lg:mt-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            EdTech Solution & <br />
              <span className="text-gray-300">School Management</span> <br />Software
            </h1>
            <p className="mt-4 sm:mt-6  sm:text-sm text-gray-400">
            Streamlined Platform for Managing Courses, Students, Exams, and School Operations.
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

        {/* Hero Section */}
        <section className=" text-white py-8 md:py-12 lg:py-16 space-y-16 lg:space-y-20 lg:mr-24">
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
          <div className="grid md:grid-cols-2 gap-12 items-start lg:ml-16">
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
          <div className="grid md:grid-cols-2 gap-12 items-center lg:mr-15">
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
