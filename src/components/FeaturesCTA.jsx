import { motion } from 'framer-motion';
import { BarChart3, Calendar, Gift, Map } from 'lucide-react';

export default function FeaturesCTA() {
  const features = [
    { icon: <BarChart3 className="text-[#2E7D32]" />, title: 'Real-time tracking', desc: 'Live insights on collected food waste and impact.' },
    { icon: <Calendar className="text-[#2E7D32]" />, title: 'Local scheduling', desc: 'Plan pickups with community collectors.' },
    { icon: <Gift className="text-[#2E7D32]" />, title: 'Reward points', desc: 'Earn credits for contributing to the loop.' },
    { icon: <Map className="text-[#2E7D32]" />, title: 'Impact analytics', desc: 'Visualize reduction and diversion from landfills.' },
  ];

  return (
    <section id="features" className="relative" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 text-center"
        >
          Powerful Web & App Features
        </motion.h3>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white border hover:shadow-sm transition"
              style={{ borderColor: '#E0E0E0' }}
            >
              <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                {f.icon}
              </div>
              <div className="mt-3 font-medium text-gray-900">{f.title}</div>
              <div className="mt-1 text-sm text-gray-600">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white shadow-lg hover:shadow-xl transition shadow-[#2E7D32]/20" style={{ backgroundColor: '#2E7D32' }}>
            Sign up your restaurant or community
          </a>
          <span className="text-gray-600">Be part of the circular economy.</span>
        </div>
      </div>
    </section>
  );
}
