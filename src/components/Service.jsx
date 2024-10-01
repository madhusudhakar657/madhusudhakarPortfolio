import React from "react";

const services = [
  {
    id: 1,
    title: "Front-End Web Development",
    description: "I specialize in building responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React.js. My focus is on creating clean, efficient code to ensure smooth user experiences across all devices.",
  },
  {
    id: 2,
    title: "Custom React Applications",
    description: "Whether you need a simple landing page or a complex web application, I design and develop scalable React applications tailored to your specific business needs, ensuring performance and scalability.",
  },
  {
    id: 3,
    title: "Basic Back-End Development (Node.js)",
    description: "I provide simple back-end solutions using Node.js for handling CRUD operations. This includes setting up and managing APIs, databases, and server-side functionality to ensure smooth data flow between the front-end and back-end.",
  },
  {
    id: 4,
    title: "UI/UX Design Integration",
    description: "I seamlessly integrate UI/UX design principles to build intuitive and aesthetically pleasing interfaces that align with user expectations and enhance overall user engagement.",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description: "I ensure that your website looks and functions perfectly on all devices—desktops, tablets, and smartphones—providing a smooth and consistent experience for users, regardless of screen size.",
  },
  {
    id: 6,
    title: "API Integration & State Management",
    description: "With strong expertise in API integration and React state management (using Redux or Context API), I ensure that your front-end interacts efficiently with back-end services to deliver dynamic content and real-time data updates.",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description:"I focus on optimizing website performance through best practices in React development, ensuring faster load times, improved SEO, and a better user experience overall."
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
