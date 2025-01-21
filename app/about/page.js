import React from 'react';
import { Library, Printer, Clock, Users, CheckCircle, Award } from 'lucide-react';

const AboutPage = () => {
  const services = [
    {
      icon: <Printer className="w-8 h-8 text-purple-500" />,
      title: "Commercial Printing",
      description: "High-quality printing solutions for businesses including brochures, business cards, and marketing materials."
    },
    {
      icon: <Library className="w-8 h-8 text-purple-500" />,
      title: "Document Services",
      description: "Professional document printing, binding, and finishing services for all your business needs."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Custom Solutions",
      description: "Tailored printing solutions to meet your specific requirements and business goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 p-12 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            About La Moniega Integrated Services Ltd
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Your trusted partner in professional printing services, delivering excellence and quality since our establishment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-16 h-16 text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
            To provide exceptional printing services that help businesses and individuals bring their visions to life through high-quality, innovative, and sustainable printing solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-purple-500">
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-800 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-10 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <CheckCircle className="w-8 h-8 text-purple-200 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Quality Assurance</h3>
                <p className="text-purple-100">We maintain the highest standards in every project we undertake.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Clock className="w-8 h-8 text-purple-200 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Quick Turnaround</h3>
                <p className="text-purple-100">Fast and efficient service without compromising on quality.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us today to discuss your printing needs and get a custom quote.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;