import logo from './assets/logo.svg'

export const Header = () => {
    return(
        <section className="font-workSans">
            <nav className='w-11/12 md:w-8/12 mx-auto py-3'>
                <div className='flex items-center h-max gap-2' aria-label="logo">
                    <img className='w-[10vmin] md:w-[6vmin]' src={logo} alt="logo-svg" />
                    <div className=''>
                        <p className='translate-y-[.20rem] text-sm md:text-lg '>Good morning</p>
                        <h1 className='font-bold text-xl -translate-y-[0.20rem]'>Fellas</h1>
                    </div>
                </div>
            </nav>
        </section>
    )
}