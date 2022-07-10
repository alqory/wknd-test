import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import './style.css'

export const Closing = () => {
    
    const [ref, InView] = useInView({
        triggerOnce : true,
        threshold : 1
    })
    const animation = useAnimation()

    useEffect(()=> {
         
        if(InView) {
            animation.start({
                y : 0,
                opacity : 1,
                transition : {
                    type : "spring",
                    bounce : 0.4,
                    duration : 1
                }
            })
        }
        
        if(!InView) animation.start({ y : 100, opacity : 0 })

    },[InView])

    return(
        <section className="font-workSans bg-black pt-16 pb-[25rem] lg:pb-52 text-white" aria-label="closing-container">
            <motion.div ref={ref} animate={animation}  className='text-left md:text-center w-10/12 md:w-[619px] mx-auto' aria-label='closing-wrapper-text'>
                <h1 className="text-3xl font-extrabold">You're all set.</h1>
                <p className="font-light mt-[30px] mx-auto">The wise man therefore always holds in these matters to this principle of selection.</p>
            </motion.div>
        </section>
    )
}