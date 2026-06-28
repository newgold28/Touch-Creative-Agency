'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

const services = [
  {
    title: 'Web Design',
    description: 'Stunning, user-centric designs that bring your vision to life.',
    features: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping'],
    icon: '🎨',
  },
  {
    title: 'Web Development',
    description: 'High-performance websites and applications built with modern tech.',
    features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
    icon: '💻',
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning to maximize your online presence and impact.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Strategy', 'Digital Roadmap'],
    icon: '📊',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms to boost your online sales.',
    features: ['Store Development', 'Payment Integration', 'Inventory Management', 'Analytics'],
    icon: '🛒',
  },
  {
    title: 'Brand Development',
    description: 'Cohesive brand identity that resonates with your audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Messaging Strategy'],
    icon: '🏢',
  },
  {
    title: 'Digital Marketing',
    description: 'Results-driven marketing campaigns that drive growth.',
    features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
    icon: '📱',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="p-8 border border-border rounded-xl hover:border-accent transition-all h-full flex flex-col bg-card/50 hover:bg-accent/5">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 bg-primary/20 text-accent rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your goals, audience, and challenges.' },
                { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan to achieve your objectives.' },
                { step: '03', title: 'Execution', description: 'We bring your vision to life with precision and creativity.' },
                { step: '04', title: 'Optimization', description: 'We continuously refine and improve performance.' },
              ].map((phase) => (
                <motion.div
                  key={phase.step}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                  {phase.step !== '04' && (
                    <div className="hidden md:block absolute top-10 -right-4 text-2xl text-primary/40">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-16 text-center">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$2,999',
                  description: 'Perfect for small projects',
                  features: ['5 Pages', 'Responsive Design', 'Basic SEO', 'Support'],
                },
                {
                  name: 'Professional',
                  price: '$7,999',
                  description: 'For growing businesses',
                  features: ['Unlimited Pages', 'Advanced Design', 'Full SEO', 'Analytics', 'Priority Support'],
                  featured: true,
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large-scale projects',
                  features: ['Full Custom Development', 'E-commerce Integration', 'Team Training', '24/7 Support'],
                },
              ].map((plan) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-xl border-2 transition-all ${
                    plan.featured
                      ? 'border-accent bg-accent/10 scale-105'
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{plan.description}</p>
                  <div className="text-4xl font-bold mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <span className="mr-3 text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border hover:border-accent hover:text-accent'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help your business grow.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
