import robots from './assets/robots.svg'
import './style.css'
import { motion } from 'framer-motion'


export const Hero = () => {
    return(
        <motion.section
          initial={{ opacity : 0 }}
          animate={{ opacity : 1 }}
          className='font-workSans relative overflow-hidden h-[620px] md:h-[722px]'
          aria-label="hero"
          >
                <div className="text-white py-20 mx-auto" aria-label="hero-wrapper">
                    <div className='text-center' aria-label="typography-wrapper">
                        <h1 className='text-[55px] lg:text-[62px] leading-[50px] mb-4 font-extrabold'>WEEKEND FROM HOME</h1>
                        <em className='text-[16.5px] md:text-[21px] font-semibold '>style active with a little workout.</em>
                    </div>

                    <div className='mt-14 relative flex justify-evenly items-center' aria-label='hero-robot-icon'>
                        <motion.div
                          initial={{ y : -100 }}
                          animate={{ y : 0 }}
                          transition={{ type:"spring" }}
                          className='flex flex-col justify-center items-center'
                          aria-label='robot-wrapper'>
                            <img className="" src={robots}  alt="robot-icon"  />
                            <button onClick={() => autoScroll()} className='bg-white shadow-lg shadow-main text-black py-5 w-56 rounded-[29px] text-[1rem] -translate-y-[6.5rem] hover:bg-gray-100 transition-colors'>Let's Go</button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
    )
}