import wave from './assets/black-wave.svg'
import curve from './assets/blue-curve.svg'
import robots from './assets/robots.svg'
import roundedPink from './assets/pink-curve.svg'
import './style.css'

export const Hero = () => {
    return(
        <section className='relative -z-20 overflow-hidden h-[620px] md:h-[722px]' aria-label="hero">
                <div className="text-white mt-20 font-workSans mx-auto md:w-7/12 w-11/12" aria-label="hero-wrapper">
                    <div className='text-center' aria-label="typography-wrapper">
                        <h1 className='text-[50px] md:text-[62px] leading-[50px] mb-4 font-extrabold'>WEEKEND FROM HOME</h1>
                        <em className='text-[15.5px] md:text-[21px] font-semibold '>style active with a little workout.</em>
                    </div>
                    {/* Done  */}

                    <div className='mt-14 relative flex justify-evenly items-center' aria-label='hero-robot-icon'>
                        <div className='absolute -left-20 md:left-[8rem] -top-10 bg-blue h-[132px] w-[132px]  rounded-full' aria-label='rounded-icon'></div>
                        <div className='flex flex-col justify-center items-center' aria-label='robot-wrapper'>
                            <img className="" src={robots}  alt="robot-icon"  />
                            <button className='bg-white text-black py-5 w-56 rounded-[29px] text-[1rem] -translate-y-[6.5rem]'>Let's Go</button>
                        </div>
                        <img className='hidden md:block absolute top-0 -right-32' src={roundedPink} alt="rounded-pink" />
                    </div>
                </div>
            </section>
    )
}