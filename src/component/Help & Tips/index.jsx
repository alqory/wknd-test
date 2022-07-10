import right from './assets/right-arrow.svg'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import "./style.css"

export const HelpAndTips = () => {

    const [content, setContent] = useState([])
    const [ref, InView] = useInView({
        triggerOnce : true,
        threshold : window.innerWidth > 768 ? 1 : 0.2
    })
    const animation = useAnimation()

    const getContentFromAPI = async () => {
        try {
            const response = await( await fetch("https://wknd-take-home-challenge-api.herokuapp.com/help-tips") ).json()
            setContent(prev => response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getContentFromAPI()

        animation.start({
            y : 0,
            opacity : 1,
            transition : {
                type : "spring",
                bounce : 0.4,
                duration : 1
            }
        })

        if(!InView) animation.start({ y : 100, opacity : 0 })
    },[InView])

    return(
        <section className="font-workSans flex justify-center items-center text-white pb-16" aria-label='container-content'> 
            <motion.div ref={ref} animate={animation} className='w-[82%] md:w-8/12' aria-label='content-wrapper'>
                <h1 className="text-left md:text-center text-3xl font-extrabold">Help & Tips</h1>                     
                <div 
                 className='flex flex-wrap lg:flex-nowrap mx-auto gap-3 mt-9' 
                 aria-label='wrapper-content'>
                    {
                        content?.map((item,i) => (
                            <div
                                key={i} 
                                style={{ 
                                backgroundImage : `url('${item.image}')`,
                                backgroundSize : "cover"
                                }}
                                className="relative flex items-end cursor-pointer h-[185px] md:h-[170px] w-full hover:-translate-y-2 duration-300" aria-label="card-items">
                                <div className=' py-4 flex w-full justify-around md:justify-evenly bg-gray-700 bg-opacity-70'>
                                    <p className='font-semibold w-[200px] leading-4'>{item.title}</p>
                                    <button className="bg-white p-3 rounded-full">
                                        <img className='opacity-70' src={right} alt="arrow"/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
}
