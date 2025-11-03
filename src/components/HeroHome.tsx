import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {RightArrowIcon} from '@/components/ui/Icons'

export function HeroHome() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-3.5 w-dvw h-96 justify-center items-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E1B4B]"
    >
      <h2 className="text-text-blue font-semibold">e2e Solutions</h2>
      <p className="text-[#F8FAFC]">Digitalizamos pymes con web + IA</p>
      <div className="w-3/4 text-center text-[#94A3B8]">
        <p>
          Transforma tu negocio con soluciones web profesionales y
          automatización inteligente. Más clientes, menos tiempo perdido.
        </p>
      </div>
      <div>
        <a>
          <button className="flex flex-end gap-4 hover:scale-115 hover:bg-secondary-hover  transition-all duration-200 ease-in-out text-white bg-[#2563EB] rounded-[6px] px-4 py-2 cursor-pointer">
            Pide tu diagnóstico gratis
            <RightArrowIcon></RightArrowIcon>
          </button>
        </a>
      </div>
    </motion.section>
  );
}
