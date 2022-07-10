import right from './assets/right-arrow.svg'
import bgimg from './assets/img.jpg'
import { useState, useEffect } from 'react'
import "./style.css"

export const HelpAndTips = () => {

    const [content, setContent] = useState([])
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
    },[])

    return(
        <section className="font-workSans flex justify-center items-center text-white pb-16" aria-label='container-content'> 
            <div className='w-[82%] md:w-8/12' aria-label='content-wrapper'>
                <h1 className="text-left md:text-center text-3xl font-extrabold">Help & Tips</h1>                     
                <div className='flex flex-wrap lg:flex-nowrap mx-auto gap-3 mt-9' aria-label='wrapper-content'>
                    {
                        content?.map((item,i) => (
                            <div
                                key={i} 
                                style={{ 
                                backgroundImage : `url('${item.image}')`,
                                backgroundSize : "cover"
                                }}
                                className="relative flex items-end  h-[185px] md:h-[170px] w-full" aria-label="card-items">
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
            </div>
        </section>
    )
}
