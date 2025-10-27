import { motion } from 'framer-motion';
import { Recycle, Leaf, Zap } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="solution" className="relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">The Problem with Food Waste</h2>
          <p className="mt-4 text-gray-600">
            Every year, millions of tons of edible waste are discarded. Urban areas lack an efficient waste-to-energy system. Our solution bridges the gap between waste and renewable energy.
          </p>

          {/* Transition graphic */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F5F5F5] border" style={{ borderColor: '#E0E0E0' }}>
              <Recycle className="text-[#2E7D32]" />
              <span className="text-gray-800">Pollution</span>
            </div>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12h52" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" />
              <path d="M52 4l8 8-8 8" fill="none" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F5F5F5] border" style={{ borderColor: '#E0E0E0' }}>
              <Leaf className="text-[#2E7D32]" />
              <span className="text-gray-800">Green Cities</span>
            </div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Smart Waste Management System</h3>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Digital Platform',
                desc: 'Connects restaurants, locals, and recyclers.',
                icon: <Zap className="text-[#2E7D32]" />,
              },
              {
                title: 'Smart Bins',
                desc: 'Auto-segregate and collect efficiently.',
                icon: <Recycle className="text-[#2E7D32]" />,
              },
              {
                title: 'Conversion Units',
                desc: 'Produce biogas, fertilizers, and electricity.',
                icon: <Leaf className="text-[#2E7D32]" />,
              },
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-2xl bg-white border hover:shadow-sm transition" style={{ borderColor: '#E0E0E0' }}>
                <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#E8F5E9' }}>
                  {card.icon}
                </div>
                <div className="font-medium text-gray-900">{card.title}</div>
                <div className="text-sm text-gray-600 mt-1">{card.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
