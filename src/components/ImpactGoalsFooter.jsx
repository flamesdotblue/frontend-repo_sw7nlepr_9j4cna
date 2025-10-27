import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Zap } from 'lucide-react';

function Counter({ to, suffix = '' }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactGoalsFooter() {
  return (
    <section className="relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Impact */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 text-center"
        >
          Driving Real Change
        </motion.h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F5F5F5] border text-center" style={{ borderColor: '#E0E0E0' }}>
            <div className="text-3xl font-semibold text-gray-900">
              <Counter to={2000} />+
            </div>
            <div className="text-gray-600 mt-1">tons of waste recycled</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#F5F5F5] border text-center" style={{ borderColor: '#E0E0E0' }}>
            <div className="text-3xl font-semibold text-gray-900">
              <Counter to={10000} /> kg
            </div>
            <div className="text-gray-600 mt-1">of biogas generated</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#F5F5F5] border text-center" style={{ borderColor: '#E0E0E0' }}>
            <div className="text-3xl font-semibold text-gray-900">
              <Counter to={15} suffix="%" />
            </div>
            <div className="text-gray-600 mt-1">reduction in landfill waste</div>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'AI-based waste prediction',
              desc: 'Use data to forecast volumes and optimize routes.',
            },
            {
              title: 'Smart city integration',
              desc: 'Connect to urban IoT infrastructure and grids.',
            },
            {
              title: 'Municipal partnerships',
              desc: 'Scale impact through public-private collaboration.',
            },
          ].map((g) => (
            <div key={g.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: '#E0E0E0' }}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                  <Zap className="text-[#2E7D32]" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{g.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{g.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div id="cta" className="mt-16 rounded-3xl p-8 sm:p-10 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)' }}>
          <div className="text-2xl sm:text-3xl font-semibold">Join the circular movement today</div>
          <p className="mt-2 text-white/90">Sign up your restaurant or community to start earning rewards and reducing waste.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="px-6 py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition">Get Started</a>
            <a href="#features" className="px-6 py-3 rounded-xl border border-white/50 text-white hover:bg-white/10 transition">Explore Features</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: '#E0E0E0', backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="h-8 w-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#2E7D32' }}>SW</div>
                <span className="font-semibold text-gray-900">Smart Waste</span>
              </div>
              <p className="mt-2 text-gray-600">Smart Waste. Smarter Planet.</p>
            </div>

            <div className="flex items-center gap-6 text-gray-700">
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#solution" className="hover:text-gray-900">How It Works</a>
              <a href="#cta" className="hover:text-gray-900">Join Us</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white border hover:bg-gray-50" style={{ borderColor: '#E0E0E0' }}>
                <Instagram size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white border hover:bg-gray-50" style={{ borderColor: '#E0E0E0' }}>
                <Linkedin size={18} />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-lg bg-white border hover:bg-gray-50" style={{ borderColor: '#E0E0E0' }}>
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Smart Waste. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}
