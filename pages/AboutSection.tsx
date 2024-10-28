'use client'
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase, Award, User, GraduationCap, Code, Wrench } from 'lucide-react';

interface TabButtonProps {
  value: string;    
  label: string;
}

interface SectionHeaderProps {
  title: string;
  icon: React.ReactNode;
}

interface PersonalInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

interface SkillCardProps {
  icon: React.ReactNode;
  skill: string;
}

interface EducationItemProps {
  title: string;
  institution: string;
  year: string;
}

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#1e1e2f] via-[#2a2a4e] to-[#1e1e2f] py-20 px-4 sm:px-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          About
        </h2>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl" />
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500">
          <Tabs.Root defaultValue="tab1" className="w-full">
            <Tabs.List className="flex justify-center gap-8 mb-12 p-2 rounded-xl bg-gray-800/30">
              <TabButton value="tab1" label="Personal Info" />
              <TabButton value="tab2" label="Skills" />
              <TabButton value="tab3" label="Education" />
            </Tabs.List>

            <Tabs.Content value="tab1" className="space-y-8">
              <SectionHeader title="Personal Information" icon={<User className="text-purple-400 drop-shadow-glow" size={32} />} />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <PersonalInfoItem 
                  icon={<MapPin className="text-pink-400 drop-shadow-glow" size={24} />} 
                  label="Location" 
                  value="San Francisco, CA" 
                />
                <PersonalInfoItem 
                  icon={<Mail className="text-purple-400 drop-shadow-glow" size={24} />} 
                  label="Email" 
                  value="example@mail.com" 
                />
                <PersonalInfoItem 
                  icon={<Briefcase className="text-indigo-400 drop-shadow-glow" size={24} />} 
                  label="Experience" 
                  value="5+ years" 
                />
                <PersonalInfoItem 
                  icon={<Award className="text-pink-400 drop-shadow-glow" size={24} />} 
                  label="Portfolio" 
                  value={<a href="#" className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-500/30 hover:decoration-purple-500">View Portfolio</a>} 
                />
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="tab2" className="space-y-8">
              <SectionHeader title="Skills & Expertise" icon={<Wrench className="text-purple-400 drop-shadow-glow" size={32} />} />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <SkillCard icon={<Code className="text-indigo-400 drop-shadow-glow" size={24} />} skill="JavaScript" />
                <SkillCard icon={<Code className="text-purple-400 drop-shadow-glow" size={24} />} skill="React" />
                <SkillCard icon={<Code className="text-pink-400 drop-shadow-glow" size={24} />} skill="Next.js" />
                <SkillCard icon={<Code className="text-indigo-400 drop-shadow-glow" size={24} />} skill="Tailwind CSS" />
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="tab3" className="space-y-8">
              <SectionHeader title="Education Journey" icon={<GraduationCap className="text-purple-400 drop-shadow-glow" size={32} />} />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 glow-line" />
                <div className="space-y-12 ml-8">
                  <EducationItem 
                    title="Master's in Computer Science" 
                    institution="UC Berkeley" 
                    year="2020 - 2022" 
                  />
                  <EducationItem 
                    title="Bachelor's in Software Engineering" 
                    institution="MIT" 
                    year="2016 - 2020" 
                  />
                </div>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </motion.div>
    </section>
  );
}

function TabButton({ value, label }: TabButtonProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-6 py-3 text-lg font-medium text-gray-400 transition-all duration-300 border-b-2 border-transparent hover:text-white hover:border-purple-500 data-[state=active]:text-white data-[state=active]:border-purple-500 rounded-lg hover:bg-purple-500/10"
    >
      {label}
    </Tabs.Trigger>
  );
}

function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <motion.div className="flex items-center space-x-4 mb-8 p-4 rounded-2xl bg-gradient-to-r from-gray-800/30 to-transparent">
      {icon}
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
        {title}
      </h2>
    </motion.div>
  );
}

function PersonalInfoItem({ icon, label, value }: PersonalInfoItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="p-3 rounded-lg bg-gray-800/80 group-hover:bg-gray-700/80 ring-1 ring-white/10 group-hover:ring-purple-500/50">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1 group-hover:text-purple-400 transition-colors">{label}</p>
        <div className="text-lg font-medium text-white group-hover:text-purple-200 transition-colors">{value}</div>
      </div>
    </motion.div>
  );
}

function SkillCard({ icon, skill }: SkillCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="p-4 rounded-full bg-gray-800/80 mb-4 ring-1 ring-white/10 hover:ring-purple-500/50">
        {icon}
      </div>
      <span className="text-lg font-medium text-white bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300">{skill}</span>
    </motion.div>
  );
}

function EducationItem({ title, institution, year }: EducationItemProps) {
  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className="relative"
    >
      <div className="absolute -left-10 top-3 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-gray-800 glow" />
      <div className="p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <h3 className="text-xl font-semibold text-white mb-2 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400">{title}</h3>
        <p className="text-purple-400 hover:text-pink-400 transition-colors">{institution}</p>
        <p className="text-gray-400 text-sm mt-1 hover:text-purple-300 transition-colors">{year}</p>
      </div>
    </motion.div>
  );
}
