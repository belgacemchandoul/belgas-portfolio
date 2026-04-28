import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import TechBadge from "../ui/TechBadge";

const About = () => {
  return (
    <section id="about" className="bg-hero-bg py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-start">
        {/* Left — bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">
            about
          </p>

          <h2
            className="font-display text-white"
            style={{ fontSize: "42px", lineHeight: 1.2 }}
          >
            Engineer.
            <br />
            Builder.
            <br />
            Shipper.
          </h2>

          <div
            className="font-sans text-[#777] mt-8 space-y-5"
            style={{ fontSize: "17px", lineHeight: 1.9 }}
          >
            <p>I'm Belgacem, a full-stack engineer based in Doha, Qatar.</p>

            <p>
              I build production web apps end to end, from APIs and data models
              to frontend and deployment. I mainly work with React, Next.js,
              Python, and Node.js.
            </p>

            <p>
              I also integrate AI into real products.{" "}
              <span className="text-lime font-medium">FlowIQ</span> is a
              multi-tenant AI agent platform I built, live with paying
              customers.
            </p>

            <p>
              I work with startups and product teams on contract and own the
              technical side from start to finish.
            </p>
          </div>
        </motion.div>

        {/* Right — skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.15,
          }}
          className="flex flex-col gap-7"
        >
          {skills.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
