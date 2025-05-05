'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Sign Up',
      description:
        'Create your account in minutes. No technical expertise required.',
      icon: (
        <svg
          className="w-16 h-16 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
    {
      title: 'Set Up Your Business',
      description:
        'Configure your business profile and customize your dashboard.',
      icon: (
        <svg
          className="w-16 h-16 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Start Tracking',
      description:
        'Begin recording sales and expenses, and access real-time analytics.',
      icon: (
        <svg
          className="w-16 h-16 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Grow Your Business',
      description:
        'Use insights and analytics to make informed decisions and grow.',
      icon: (
        <svg
          className="w-16 h-16 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

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
              How It Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
            >
              Getting started with Cocab Solutions is simple and straightforward. No
              technical expertise required.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              key={index}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-8 rounded-3xl shadow-xl h-full">
                <div className="bg-white p-4 rounded-2xl inline-block shadow-md mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-indigo-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Why Choose Cocab?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'User-Friendly',
                description: 'Our platform is designed to be intuitive and easy to use, even for those without technical experience.'
              },
              {
                title: 'Time-Saving',
                description: 'Automate routine tasks and focus on growing your business instead of managing paperwork.'
              },
              {
                title: 'Data-Driven',
                description: 'Make informed decisions with real-time insights and comprehensive analytics.'
              }
            ].map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40"
        >
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-light">
              Join thousands of small businesses already using Cocab Solutions.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-indigo-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-indigo-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}