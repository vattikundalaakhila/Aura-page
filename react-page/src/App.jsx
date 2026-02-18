
import MainHeader from './MainHeader'
import Banner from './Banner'
import Hero from "./Hero";
import Features from './features'
import Features1 from "./Features1";
import Sensors from "./Sensors";
import SmartRing from "./SmartRing";
import MainFooter from './MainFooter';
import Cta from "./Cta";
import Specifications from './Specifications';



function App() {
  

  return (
    <div className='bg-black text-white'>
      <MainHeader/>
      <Banner/>
      <Hero/>
      <Features/>
      <Features1/>
      <Sensors/>
      <SmartRing/>
      <Specifications/>
       <Cta/>
      <MainFooter/>
     
      
    </div>
  )
}

export default App;
