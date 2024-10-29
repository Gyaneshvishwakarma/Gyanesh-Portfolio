'use client'
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mjkvgqkz");

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#1e1e2f] via-[#2a2a4e] to-[#1e1e2f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          >
            Contact Me
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Feel free to reach out for collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 flex flex-col text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-4">
              <ContactMethod icon={<Mail className="w-5 h-5" />} info="gyaneshvishwakarma917@gmail.com" />
              <ContactMethod icon={<Phone className="w-5 h-5" />} info="+91 9174729184 " />
              <ContactMethod icon={<MapPin className="w-5 h-5" />} info="Jabalpur, Madhya Pradesh" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                id="name"
                type="text" 
                name="name"
                className="p-2 rounded-lg bg-gray-800/50 text-white border border-gray-300"
              />
              <label htmlFor="email" className="text-white">
                Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="p-2 rounded-lg bg-gray-800/50 text-white border border-gray-300"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="p-2 rounded-lg bg-gray-800/50 text-white border-gray-300"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={state.submitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Submit
              </motion.button>
              {state.succeeded && <p>Thanks for joining!</p>}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactMethod({ icon, info }: { icon: React.ReactNode; info: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-gray-800 text-purple-400">{icon}</div>
      <span className="text-gray-300">{info}</span>
    </div>
  );
}
