import left from './assets/left-arrow.svg'
import right from './assets/right-arrow.svg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export const Testimonial  = () => {
    const [xPos, setX] = useState(0)
    const [testimonial, setTestimonial] = useState([])
    const [drag, setDrag] = useState(false)
    const [ref, inView] = useInView({
        threshold : 1,
        triggerOnce : true
    })
    const animation = useAnimation()


    const getTestimonialAPI =  async () => {
        try {
            const response = await( await fetch("https://wknd-take-home-challenge-api.herokuapp.com/testimonial") ).json()
            setTestimonial(prev => response)
        } catch (error) {
            console.log(error?.message)
        }
    }

    useEffect(()=> {
        getTestimonialAPI()

        if(window.innerWidth >= 1024) {
            setDrag(false)
        }else {
            setDrag(true)
        }

        animation.start({
            y : 0,
            opacity : 1,
            transition : {
                duration : 0.4
            }
        })

        if(!inView) animation.start({ y : -100, opacity : 0 })

    },[inView])

    const slideRight = () => {
        setX(prev => prev  - 250)
    }

    const slideLeft = () => {
        setX(prev => prev  + 250)
    }

    return(
        <motion.section 
         ref={ref}
         animate={animation}
         className="font-workSans relative overflow-hidden" 
         aria-label="testimonial"
         >
            <div className='absolute left-14 lg:left-[19rem] top-2 h-[89px] w-[89px] rounded-full bg-blue' aria-label='rounded-blue'></div>
            <div className="bg-main py-20 text-left md:text-center">
                <h1 className="text-3xl translate-x-9 lg:translate-x-2 font-extrabold text-white">Testimonial</h1>
            </div>
            <div className="bg-black flex justify-center  items-center gap-x-5" aria-label="testimonial-slider">
                <button 
                    disabled={ xPos === 0 || false }
                    onClick={()=> slideLeft()}
                    className="-translate-y-9 hidden lg:block bg-gray-600 hover:bg-white p-3 rounded-full"
                   >
                    <img className='opacity-70' src={left} alt="left-arrow"/>
                </button>
                <div className='-translate-y-10 translate-x-9 lg:translate-x-4 w-[550px] overflow-hidden cursor-grab' aria-label='slider-content-container'>
                    <motion.div 
                        drag={ drag ? "x" : false }
                        dragConstraints={{ right:0, left: window.innerWidth > 1029 ? -730 : -930 }}
                        animate={{ 
                            x : xPos,
                            transition : {
                                duration : 0.5
                            }}} 
                        className="flex gap-3 " 
                        aria-label="slider-content-wrapper">
                        {
                            testimonial.map((testi, i) => (
                                <div key={i} className="bg-white w-min px-4 py-3" aria-label='slider-content'>
                                    <h1 className='text-[1.6rem] font-extrabold mb-3'>{testi.by}</h1>
                                    <p className='w-[210px] text-xs leading-4'>{testi.testimony}</p>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>
                <button 
                disabled={ xPos === -750 || false } 
                onClick={()=> slideRight()} 
                className="-translate-y-9 translate-x-0 hidden lg:block lg:translate-x-12 bg-gray-600 hover:bg-white p-3 rounded-full">
                    <img className='opacity-70' src={right} alt="left-arrow"/>
                </button>
            </div>
        </motion.section>
    )
}