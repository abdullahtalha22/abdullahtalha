import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Server } from "lucide-react";

export default function Skills() {
  const skills = [
    { icon: <Smartphone />, title: "Mobile Development", desc: "Flutter, Dart, Firebase, REST APIs" },
    { icon: <Code2 />, title: "Web Development", desc: "React, Tailwind CSS, HTML, JavaScript" },
    { icon: <Server />, title: "Backend & Tools", desc: "API Integration, Git, Responsive Dashboards" },
    { icon: <Palette />, title: "UI/UX Design", desc: "Problem-Solving, Project Planning, Figma" }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            whileHover={{scale:1.05}}
            className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg shadow-lg hover:shadow-cyan-400/40 transition"
          >
            <div className="text-cyan-400 mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
 
