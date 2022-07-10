export const Information = () => {
    return(
        <section className="bg-black font-workSans" aria-label="information-container">
            <div className="pt-12 pb-28 flex flex-col justify-center items-center gap-y-20" aria-label="information wrapper">
                <div className="text-white w-[83%]  md:w-[550px] text-left md:text-center" aria-label="POV-wrapper">
                    <h2 className="text-3xl font-bold ">POV</h2>
                    <p className="font-light mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className="w-[83%]  md:w-[570px] text-white text-left md:text-center font-workSans" aria-label="Resource-wrapper">
                    <h1 className="text-3xl font-extrabold ">Resource</h1>
                    <p className="font-light mt-[30px]">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                </div>
            </div>
        </section>
    )
}