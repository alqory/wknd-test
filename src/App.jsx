import { Header } from "./component/Header"
import { Hero } from "./component/Hero"
import { Deffinition } from "./component/Deffinition"
import { Testimonial } from "./component/Testimonial"
import { Information } from "./component/Information"
import { HelpAndTips } from "./component/Help & Tips"
import { Closing } from "./component/Closing"
import { Footer } from "./component/Footer"

export default function App(){
  return(
    <>
      <Header />
      <Hero />
      <Deffinition />
       <Testimonial />
      <Information />
      <HelpAndTips />
      <Closing />
      <Footer /> 
    </>
  )
}