import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-10 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The ISP Operations System transformed our processes, making us more efficient and customer-focused."
            </p>
            <h4 className="font-bold text-blue-600">- Anas, ISP Manager</h4>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Thanks to this system, we’ve drastically reduced downtime and improved customer satisfaction."
            </p>
            <h4 className="font-bold text-blue-600">- Abu-bakar, Support Lead</h4>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "A must-have for any ISP looking to streamline operations and boost productivity."
            </p>
            <h4 className="font-bold text-blue-600">- Shoaib, CTO</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
