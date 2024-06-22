
import Header from "./_component/Header.jsx"
import Hero from "./_component/Hero.jsx"
import Services from "./_component/Services.jsx"
import Works from "./_component/Works.jsx"
import Advantages from "./_component/Advantages.jsx"
import OurClients from "./_component/clients/OurClients.jsx"
import ChairmansMessag from "./_component/ChairmansMessage.jsx"
import Footer from "../app/_component/Footer.jsx"


export default function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <Advantages/>
        <OurClients/>
        <Works/>
        <ChairmansMessag/>
        <Footer/>
        
        
      
    </>

  );
}
