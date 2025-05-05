'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function Services() {
  const services = [
    {
      title: 'Sales and Expense Recording',
      description:
        'Track your business finances with ease using our intuitive recording tools.',
      features: [
        'Real-time sales tracking',
        'Expense categorization', 
        'Automated receipt scanning',
        'Custom reporting',
        'Multi-currency support',
      ],
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Digital Payments and Partner Payouts',
      description:
        'Streamline your payment processes with our secure digital payment solutions.',
      features: [
        'Secure payment processing',
        'Automated partner payouts',
        'Multiple payment methods',
        'Transaction tracking',
        'Fraud protection',
      ],
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
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Analytics and Business Planning',
      description:
        'Make data-driven decisions with our comprehensive analytics platform.',
      features: [
        'Performance dashboards',
        'Trend analysis',
        'Revenue forecasting', 
        'Inventory insights',
        'Customer behavior tracking',
      ],
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
            >
              Comprehensive solutions designed to help your business grow and succeed in the
              digital age.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-12 rounded-3xl shadow-xl">
                  <div className="mb-8 bg-white p-4 rounded-2xl inline-block shadow-md">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
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
                        <span className="ml-4 text-lg text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {(index === 0 || index === 1) && (
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <Image
                    src={index === 0 ? '/images/feature2.jpg' : '/images/feature.jpg'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    quality={90}
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
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
              Contact us today to learn more about how our services can help your business
              grow.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-indigo-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-indigo-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
            >
              Contact Us
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