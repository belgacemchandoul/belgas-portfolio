import { motion } from 'framer-motion'
import { experience } from '../../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="bg-hero-bg py-28 px-6">
      <div className="max-w-5xl mx-auto border-t border-border-subtle pt-16">
        <p className="font-mono text-[11px] text-muted tracking-widest uppercase mb-3">
          experience
        </p>
        <h2 className="font-display text-white mb-16" style={{ fontSize: '52px' }}>
          Experience
        </h2>

        <div className="flex flex-col gap-14">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              className="grid md:grid-cols-[160px_1px_1fr] gap-0"
            >
              {/* Period */}
              <div className="md:text-right md:pr-8 pb-4 md:pb-0 md:pt-1.5">
                <span className="font-mono text-[12px] text-muted">{item.period}</span>
              </div>

              {/* Timeline line + dot */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.12 + 0.1 }}
                  className="w-2.5 h-2.5 rounded-full bg-lime -ml-[5px] mt-1.5 flex-shrink-0"
                  style={{ boxShadow: '0 0 8px rgba(200,242,100,0.4)' }}
                />
                <div className="flex-1 w-px bg-border-subtle mt-1" />
              </div>

              {/* Content */}
              <div className="md:pl-8">
                <h3 className="font-sans font-semibold text-white" style={{ fontSize: '18px' }}>
                  {item.role}
                </h3>
                <p className="font-mono text-[13px] text-muted mt-1">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-3 flex flex-col gap-1">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-sans text-zinc-500 leading-7 flex gap-2"
                      style={{ fontSize: '14px' }}
                    >
                      <span className="text-lime flex-shrink-0 mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
