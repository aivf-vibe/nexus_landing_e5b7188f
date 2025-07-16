'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-blue-400">Nidum AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Empowering the future with intelligent solutions. Experience the next generation of AI technology.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}