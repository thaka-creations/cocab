'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
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
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 md:py-56"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              <span className="block">Transform Your</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">Business Today</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-indigo-100 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Empower your business with intelligent analytics, seamless tracking, and secure payment solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8"
            >
              <Link
                href="/contact"
                className="group w-full md:w-auto inline-flex items-center justify-center bg-white px-10 py-5 rounded-2xl font-semibold text-xl text-indigo-900 hover:bg-indigo-50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.simplabizz&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto inline-flex items-center justify-center bg-indigo-950/90 backdrop-blur-sm px-10 py-5 rounded-2xl font-semibold text-xl text-white hover:bg-indigo-950 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-3" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                Download App
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40"
      >
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">Everything you need to manage and scale your business efficiently</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_20px_80px_rgba(8,_112,_184,_0.15)] transition-all duration-500"
          >
            <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
              <svg
                className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-500"
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
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Tracking</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Monitor your sales and expenses effortlessly with our intelligent tracking system. Get real-time insights into your business performance.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_20px_80px_rgba(8,_112,_184,_0.15)] transition-all duration-500"
          >
            <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
              <svg
                className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Transform raw data into actionable insights. Make informed decisions with our comprehensive analytics dashboard.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group p-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_20px_80px_rgba(8,_112,_184,_0.15)] transition-all duration-500"
          >
            <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
              <svg
                className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure Payments</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Accept payments seamlessly with our secure digital payment solutions. Multiple payment options for your convenience.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* App Screenshots Gallery */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Experience Our App</h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover how our Android app brings powerful business management tools right to your fingertips
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl shadow-2xl relative h-[500px] group"
          >
            <Image
              src="/images/feature.jpg"
              alt="App Screenshot 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl shadow-2xl relative h-[500px] group"
          >
            <Image
              src="/images/feature2.jpg"
              alt="App Screenshot 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </motion.div>

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
              Ready to Scale Your Business?
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-light">
              Join thousands of successful businesses that trust Cocab Solutions for their growth journey.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link
                href="/contact"
                className="group w-full md:w-auto inline-flex items-center justify-center bg-indigo-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-indigo-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              >
                Start Free Trial
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.simplabizz&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto inline-flex items-center justify-center bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-black transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-3" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                Get Mobile App
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
