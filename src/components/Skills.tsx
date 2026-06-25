import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 70 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 65 },
      { name: 'REST APIs', level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A growing toolkit of technologies that I use to bring ideas to life
            on the web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
