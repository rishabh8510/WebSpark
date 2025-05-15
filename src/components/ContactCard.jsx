import React, { useState } from 'react';
import axios from 'axios';

export default function ContactCard() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    budget: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend API to save in MongoDB
      const response = await axios.post('http://localhost:5000/contact', formData);
      alert(response.data.message); // Handle success message
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
<section className="max-w-7xl mx-auto bg-gradient-to-r from-[#0F1B3D] to-[#0C0B1F] rounded-xl border border-gray-700 overflow-hidden">
  <div className=" grid lg:grid-cols-2 gap-8 p-6 md:p-10" >
    {/* Left Text Column */}
    <div className='flex flex-col justify-center'>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-6">
        We’d love to hear from you.<br />
        Let’s build something great together.
      </h2>
      <p className="text-gray-400 text-sm  leading-relaxed">
        Looking to start a project or need more details about our services? Complete the form, and our team will reach out to you soon. At Bluewebspark, we're committed to listening, collaborating, and bringing your digital ideas to life — whether you're starting from scratch or enhancing your existing systems. We're here to help every step of the way.
      </p>
    </div>

    {/* Right Form Column */}
    <div className="bg-[#0F1B3D]/50 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-[#0F1B3D] border border-[#2F354D] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-[#0F1B3D] border border-[#2F354D] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full px-4 py-3 bg-[#0F1B3D] border border-[#2F354D] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <select
          name="budget"
          className="w-full px-4 py-3 bg-[#0F1B3D] border border-[#2F354D] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select a Budget Range</option>
          <option value="$0 - $5,000">$0 - $5,000</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000+">$10,000+</option>
        </select>
        <textarea
          name="note"
          placeholder="Note"
          rows={4}
          className="w-full px-4 py-3 bg-[#0F1B3D] border border-[#2F354D] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.note}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#1D4ED8] hover:bg-[#2563EB] transition text-white text-sm font-semibold py-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

  );
}
