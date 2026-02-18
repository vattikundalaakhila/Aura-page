import image1 from "../src/assets/BannerImage.png"

import icon from "../src/assets/icon1.png";
import Button from "../src/Common/Button";
const Banner = ()=>{
    return(
        <section className=" py-4 flex flex-col lg:flex-row  bg-[#121212] layout">
            <div className="w-full lg:w-1/2 flex flex-col gap-10 " >
                <h3 className="text-3xl tracking-[5px] text-[#30D4D4]">Next Generation Wearable</h3>
                    <h2 className="text-8xl">Meet <span className="text-[#30D4D4]">Aura</span></h2>

                    <div className="flex gap-4">
                    <p className="tracking-[6px]">The Smart Ring</p>
                    <img src= {icon} alt="icon " />
                    </div>

                    <p>
                        That tracks your health, monitors your sleep, 
                        and keeps you connected—all in one elegant design.
                    </p>

                    <div className="flex justify-between sm:justify-start sm:gap-4">
                          <Button className={'text-white hover:bg-gray-300 bg-[#30D4D4]'}>
                                            Pre_Order Now
                                       </Button>
                                         <Button className={'text-white hover:bg-gray-300'}>
                    Learn More
               </Button>
                    </div>

                    <div className="flex  gap-8">

                        <div>
                            <p className="text-xl">7 Days</p>
                            <p className="text-sm">Battery Life</p>
                        </div>

                        <div>
                            <p className="text-xl">24/7</p>
                            <p className="text-sm">Monitoring</p>
                        </div>

                        <div>
                            <p className="text-xl">5ATM</p>
                            <p className="text-sm">Water Resistant</p>
                        </div>
                    </div>

            </div>
            <div className="w-full lg:w-1/2 ">
                
                <img src={image1} alt="image 2" className="w-full h-full object-cover"/>
            </div>
            
            
        </section>
    )
}

export default Banner;