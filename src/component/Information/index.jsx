import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from 'framer-motion'

export const Information = () => {

    const animation1 = useAnimation()
    const animation2 = useAnimation()

    const [ref1, inView1] = useInView({ 
        triggerOnce : true,
        threshold : window.innerWidth >= 768 ? 1 : 0.5
     })

    const [ref2, inView2] = useInView({ 
        triggerOnce : true,
        threshold : window.innerWidth >= 768 ? 1 : 0.5
     })

    useEffect(()=> {
        if(inView1 || inView2) {

            animation1.start({
                x : 0,
                opacity : 1,
                transition : {
                    type : "spring",
                    bounce : 0.4,
                    duration : 1
                }
            })
    
            animation2.start({
                x : 0,
                opacity : 1,
                transition : {
                    type : "spring",
                    bounce : 0.4,
                    duration : 1
                }
            })
        }

        if(!inView1) animation1.start({ x :  -100 , opacity : 0 })
        if(!inView2) animation2.start({ x : 50 , opacity : 0 })

    },[inView1, inView2])
    


    return(
        <section className="bg-black font-workSans" aria-label="information-container">
            <div className="pt-12 pb-28 flex flex-col justify-center items-center gap-y-20 overflow-hidden"  aria-label="information wrapper">
                <motion.div animate={animation1} ref={ref1} className="text-white w-[83%]  md:w-[550px] text-left md:text-center" aria-label="POV-wrapper">
                    <h2 className="text-3xl font-bold ">POV</h2>
                    <p className="font-light mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </motion.div>
                <motion.div animate={animation2} ref={ref2} className="w-[83%]  md:w-[570px] text-white text-left md:text-center font-workSans" aria-label="Resource-wrapper">
                    <h1 className="text-3xl font-extrabold ">Resource</h1>
                    <p className="font-light mt-[30px]">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                </motion.div>
            </div>
        </section>
    )
}