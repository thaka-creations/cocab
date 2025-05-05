'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              About Cocab Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
            >
              We're on a mission to empower small businesses with the tools they need to thrive
              in today's digital economy.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Cocab Solutions, we believe that every small business deserves access to
              powerful tools that can help them grow and succeed. Our mission is to provide
              affordable, easy-to-use solutions that make business management simpler and
              more efficient.
            </p>
            <p className="text-xl text-gray-600">
              We understand the challenges that small business owners face every day, and
              we're committed to creating solutions that address these challenges head-on.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Goals</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-lg text-gray-600">
                  Provide intuitive business analytics tools
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-lg text-gray-600">
                  Simplify sales and expense tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-lg text-gray-600">
                  Enable seamless digital payments
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation</h3>
              <p className="text-lg text-gray-600">
                We constantly seek new ways to improve our solutions and help businesses
                succeed in an ever-changing market.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Simplicity</h3>
              <p className="text-lg text-gray-600">
                We believe in making complex business processes simple and accessible to
                everyone.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reliability</h3>
              <p className="text-lg text-gray-600">
                We're committed to providing reliable solutions that businesses can depend
                on every day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}