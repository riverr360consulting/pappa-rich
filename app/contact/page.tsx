'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Truck, Clock as FastClock, Shield, Headphones } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-0">

      {/* Hero/Intro Section - Full Width Split */}
      <section className="bg-gray-50">
        <div className="grid grid-cols-2 min-h-64">
          {/* Left - Light background with text */}
          <div className="bg-gray-50 py-8 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="text-sm mb-2">
                <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
                <span className="text-gray-400"> › </span>
                <span className="text-gray-600">Contact Us</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                We'd love to hear from you! Reach out for bookings, inquiries, or any assistance.
              </p>
            </div>
          </div>

          {/* Right - Image only, full height */}
          <div className="bg-gray-50 overflow-hidden">
            <img 
              src="/header-hero.png" 
              alt="Professional shoe cleaning kit" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we will get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Thank you! We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  Send Message ✈️
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-300">Maradath, Cheruvatta, Calicut, Kerala – 673017</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Number</h3>
                    <a href="tel:+919995123456" className="text-gray-300 hover:text-white">
                      +91 9995 123 456
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp Us</h3>
                    <a href="https://wa.me/919995123456" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      +91 9995 123 456
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Address</h3>
                    <a href="mailto:papparichshoelaundry@gmail.com" className="text-gray-300 hover:text-white break-all">
                      papparichshoelaundry@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-300">9:00 AM – 8:00 PM</p>
                    <p className="text-gray-300">(All Days Open)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Find Us Here */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Find Us Here</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Maradath, Cheruvatta, Calicut, Kerala – 673017
              </p>
              <a
                href="https://maps.google.com/?q=Pappa+Rich+Shoe+Laundry+Calicut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Directions →
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0741915444373!2d75.78333!3d11.25417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6f2e8e8e8e8e9%3A0x0!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: 'Pick & Drop Available',
                desc: 'We offer pick and drop service for your convenience.',
              },
              {
                icon: FastClock,
                title: 'Quick Turnaround',
                desc: 'Fast and reliable service so you can wear your favorite shoes again.',
              },
              {
                icon: Shield,
                title: 'Safe & Secure Cleaning',
                desc: 'We use premium products that are safe for your shoes and the environment.',
              },
              {
                icon: Headphones,
                title: 'Customer Support',
                desc: "We're here to help you with any questions or special requests.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl mx-4 my-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">We're Here to Bring Your Shoes Back to Life!</h2>
              <p className="text-gray-300 text-lg">
                Have questions or need help? Contact us today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919995123456"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919995123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
