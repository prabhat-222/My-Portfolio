import { AnimatePresence, motion } from 'framer-motion'
import { RiCloseLargeFill } from "react-icons/ri";

export default function OverlayMenu({isOpen, onClose}) {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origine = isMobile ? "90% 8%" : "50% 8%"


  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div className='fixed inset-0 flex items-center justify-center z-50'
            initial = {{clipPath : `circle(0% at ${origine})`}}
            animate={{clipPath: `circle(150% at ${origine})`}}
            exit={{clipPath: `circle(0% at ${origine})`}}
            transition={{duration: 0.7, ease: [0.4, 0, 0.2, 1]}}
            style={{backgroundColor : "rgba(0,0,0,0.95)"}}
            >
                <button onClick={onClose} className=' absolute top-6 right-6 text-white text-3xl' aria-label='close menu'>
                  <RiCloseLargeFill />
                </button>
                <ul className=' space-y-6 text-center'>
                   {[
                    "Home",
                    "About",
                    "Skills",
                    "Projects",
                    "Experience",
                    "Testimonials",
                    "Contact",
                   ].map((item, idx) => (
                      <motion.li key={idx}
                      initial ={{opacity: 0, y: 20}}
                      animate ={{opacity: 1, y: 0}}
                      transition={{delay: 0.3 + idx * 0.1}}
                      >
                        <a href={`#${item.toLocaleLowerCase()}`} onClick={onclose} className='text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300'>
                          {item}
                        </a>
                      </motion.li>
                   ))
                   
                   }
                </ul>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
