import robot from './assets/robot.svg'
import curve from './assets/curve.svg'

export const Deffinition = () => {
    return(
        <section className="bg-main -z-20 relative overflow-hidden pt-48 pb-12 md:pb-48 " aria-label="definition">
            <div className='absolute right-0 top-8 md:top-28' aria-label="definition-icon">
                <img src={robot} className="" alt="robot-icon" />
                <img className='absolute -z-10 -right-2 -top-10' src={curve} alt="curve" />
            </div>
            <div className="flex flex-col mx-auto gap-4 font-semibold text-right w-10/12 md:w-5/12 mt-7" aria-label="definition-wrapper-text">
                <p className="text-[17px] md:text-xl ">
                    <span className="text-blue">Deffinition;</span>{" "}
                     a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                </p>
                <em className="text-white pt-2">-weekend team</em>
            </div>
        </section>
    )
}