import React from 'react';
import { Library, Printer, Clock, Users, CheckCircle, Award } from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-2 mb-6">
          <Library className="w-8 h-8 text-blue-500" />
          La&apos;Moniega Integrated Services Ltd
        </h1>
        <p className="italic text-gray-600 mb-8 text-lg">
          Your trusted partner in professional printing services, delivering excellence and quality since our establishment.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Printer className="w-6 h-6 text-blue-500" />
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La&apos;Moniega Integrated Services Ltd is a premier provider of professional printing solutions, dedicated to delivering
            high-quality services that meet the unique needs of our diverse clientele. Established with a passion for excellence, 
            we have built a reputation for reliability, innovation, and precision in every project we undertake.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-500" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To provide exceptional printing services that exceed expectations, combining cutting-edge technology with unparalleled 
            customer service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-500" />
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To become a leading name in the printing industry, recognized for our commitment to quality, creativity, and sustainability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-blue-500" />
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Quality:</strong> We prioritize excellence in every print, ensuring our clients receive only the best.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients are at the heart of everything we do, and we strive to meet and surpass their expectations.
            </li>
            <li>
              <strong>Innovation:</strong> By leveraging the latest in printing technology, we deliver modern solutions that drive results.
            </li>
            <li>
              <strong>Integrity:</strong> We conduct our business with honesty, transparency, and a steadfast dedication to ethical practices.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-blue-500" />
            Services We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Offset and Digital Printing</li>
            <li>Large Format Printing (Banners, Posters, Signages)</li>
            <li>Custom Packaging Solutions</li>
            <li>Business Stationery (Brochures, Letterheads, Business Cards)</li>
            <li>Promotional Materials (Flyers, Calendars, Branded Merchandise)</li>
            <li>Graphic Design and Prepress Services</li>
            <li>Sales of original Konica Minolta toners</li>
            <li>Printer consumables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-blue-500" />
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> GF10B Noble Plaza Area 10 garki Abuja <br />
            <strong>Phone:</strong>  08069249249, 08098440096 <br />
            <strong>Email:</strong> info@lamoneiqa.ng <br />
            <strong>Website:</strong> lamoneiqa.ng
          </p>
        </section>
      </div>
    </div>
  );
}

