import left from './assets/left-arrow.svg'
import right from './assets/right-arrow.svg'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export const Testimonial  = () => {
    const [xPos, setX] = useState(0)
    const [testimonial, setTestimonial] = useState([])
    const [drag, setDrag] = useState(false)
    const dragRef = useRef(null)

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

        if(window.innerWidth >= 768) {
            setDrag(false)
        }else {
            setDrag(true)
        }
        console.log(window.innerWidth)
    },[])

    const slideRight = () => {
        setX(prev => prev  - 250)
    }

    const slideLeft = () => {
        setX(prev => prev  + 250)
    }

    return(
        <section className="relative overflow-hidden font-workSans " aria-label="testimonial">
            <div className='absolute pt-3 left-14 md:left-[300px] -top-2 md:-top-0  h-[89px] w-[89px] rounded-full bg-blue' aria-label='rounded-blue'></div>
            <div className="bg-main py-16 text-left  md:text-center">
                <h1 className="text-3xl translate-x-9 font-extrabold text-white">Testimonial</h1>
            </div>
            <div className="bg-black flex justify-center items-center" aria-label="testimonial-slider">
                <button disabled={ xPos === 0 || false } onClick={()=> slideLeft()} className="-translate-y-9 -translate-x-12 bg-gray-600 hover:bg-white p-3 rounded-full">
                    <img className='opacity-70' src={left} alt="left-arrow"/>
                </button>
                <div  className='-translate-y-10 translate-x-2 md:translate-x-9 w-[550px] overflow-hidden cursor-grab' aria-label='slider-content-container'>
                    <motion.div drag={ drag ? "x" : false } ref={dragRef} dragConstraints={{ right:0, left:-730 }}  animate={{ x : xPos, transitionDelay : 500 }} className="flex gap-3 " aria-label="slider-content-wrapper">
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
                <button disabled={ xPos === -750 || false } onClick={()=> slideRight()} className="-translate-y-9 translate-x-16 bg-gray-600 hover:bg-white p-3 rounded-full">
                    <img className='opacity-70' src={right} alt="left-arrow"/>
                </button>
            </div>
        </section>
    )
}