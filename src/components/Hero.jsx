import { motion } from 'framer-motion';
import { Leaf, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: 'radial-gradient(closest-side, #2E7D32, transparent 70%)' }} />
        <div className="absolute -bottom-20 -right-10 h-96 w-96 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: 'radial-gradient(closest-side, #A5D6A7, transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#E0E0E0] backdrop-blur">
            <Leaf className="text-[#2E7D32]" size={18} />
            <span className="text-sm text-gray-700">Smart Waste • Clean Energy</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Turning Food Waste into Energy for a Sustainable Future.
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join the smart recycling network that converts food waste into clean energy and eco-products.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white shadow-lg hover:shadow-xl transition shadow-[#2E7D32]/20" style={{ backgroundColor: '#2E7D32' }}>
              <Zap size={18} className="text-white" />
              Get Started
            </a>
            <a href="#solution" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-gray-800 bg-white hover:bg-gray-50 transition" style={{ borderColor: '#E0E0E0' }}>
              Learn How It Works
            </a>
          </div>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { label: 'Food Waste', color: '#2E7D32' },
            { label: 'Processing', color: '#4CAF50' },
            { label: 'Bioenergy', color: '#A5D6A7' },
          ].map((step, idx) => (
            <div key={step.label} className="relative">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border" style={{ borderColor: '#E0E0E0' }}>
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: step.color }}>
                  {idx === 0 && <Leaf size={22} />}
                  {idx === 1 && <Zap size={22} />}
                  {idx === 2 && <Zap size={22} />}
                </div>
                <div className="text-gray-900 font-medium">{step.label}</div>
                <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#E0E0E0' }} />
              </div>
              {idx < 2 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 translate-x-full -translate-y-1/2">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12h48" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" />
                    <path d="M48 4l8 8-8 8" fill="none" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
