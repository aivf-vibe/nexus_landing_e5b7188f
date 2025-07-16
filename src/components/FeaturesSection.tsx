'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "Advanced Analytics",
    description: "Powerful insights through AI-driven analytics"
  },
  {
    title: "Smart Automation",
    description: "Streamline your workflow with intelligent automation"
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security for your peace of mind"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}