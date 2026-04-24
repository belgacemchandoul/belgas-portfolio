import { motion } from "framer-motion";
import { social } from "../../data/social";
import MagneticButton from "../ui/MagneticButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const Contact = () => {
  return (
    <section id="contact" className="bg-hero-bg py-32 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto border-t border-border-subtle pt-16 text-center">
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase"
        >
          let's work together
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-white mt-4"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.05 }}
        >
          Let's build
          <br />
          something.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-sans text-[#666] mt-5 max-w-md mx-auto"
          style={{ fontSize: "17px", lineHeight: 1.7 }}
        >
          Available for contract work with agencies and startups. Remote,
          async-friendly across US, UK, and EU timezones.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap gap-3 justify-center mt-12"
        >
          <MagneticButton
            href={`mailto:${social.email}`}
            className="bg-lime text-hero-bg font-sans font-medium rounded-full px-7 py-3.5 text-sm hover:bg-lime-dim transition-colors duration-200"
          >
            Email me ↗
          </MagneticButton>
          <MagneticButton
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-7 py-3.5 hover:border-zinc-400 transition-colors duration-200"
          >
            LinkedIn ↗
          </MagneticButton>
          <MagneticButton
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-7 py-3.5 hover:border-zinc-400 transition-colors duration-200"
          >
            GitHub ↗
          </MagneticButton>
          <a
            href={social.cv}
            download
            data-cursor="link"
            className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-7 py-3.5 hover:border-zinc-400 transition-colors duration-200"
          >
            Download CV ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
