import robot from './assets/robot.svg'
import curve from './assets/curve.svg'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const Deffinition = () => {

    const [ref, inView] = useInView({
        triggerOnce : true,
        threshold : window.innerWidth > 1024 ? 1 : 0
    })
    const animation = useAnimation()
    useEffect(()=> {
        animation.start({
            x: 0,
            opacity : 1,
            transition : {
                type : "spring",
                duration : 1,
                bounce : 0.3
            }
        })
        if(!inView) {
            animation.start({
                x : -50,
                opacity : 0
            })
        }

    },[inView])

    return(
        <section className="font-workSans bg-main -z-20 relative overflow-hidden pt-48 pb-12 md:pb-48 " aria-label="definition">
            <div className='absolute right-0 top-8 md:top-28' aria-label="definition-icon">
                <img src={robot} className="" alt="robot-icon" />
                <img className='absolute -z-10 -right-2 -top-10' src={curve} alt="curve" />
            </div>
            <motion.div animate={animation} ref={ref} className="flex flex-col translate-x-0 lg:translate-x-4 mx-auto gap-4 font-semibold text-right w-10/12 lg:w-5/12 mt-7" aria-label="definition-wrapper-text">
                <p className="text-[17px] md:text-xl ">
                    <span className="text-blue">Deffinition;</span>{" "}
                     a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                </p>
                <em className="text-white text- pt-2">-weekend team</em>
            </motion.div>
        </section>
    )
}