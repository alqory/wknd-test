import logo from './assets/logo.svg'

export const Header = () => {
    return(
        <section className="font-workSans">
            <nav className='w-[85%] lg:w-8/12 mx-auto py-3'>
                <div className='flex items-center h-max gap-3' aria-label="logo">
                    <img className='w-[10vmin] md:w-[7vmin] lg:w-[6.5vmin]' src={logo} alt="logo-svg" />
                    <div className=''>
                        <p className='translate-y-[.23rem] text-base '>Good morning</p>
                        <h1 className='font-bold text-lg -translate-y-[0.20rem]'>Fellas</h1>
                    </div>
                </div>
            </nav>
        </section>
    )
}