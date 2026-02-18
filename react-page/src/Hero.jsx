import image from "../src/assets/icon1.png";

import icon1 from "../src/assets/vector1.png";
import icon2 from "../src/assets/vector2.png";
import icon3 from "../src/assets/vector3.png";
import arrow from "../src/assets/Arrow 5.png";
const data = [
    {img: icon1,
        h1: "Health Tracking",
        content: "Monitor heart rate, blood oxygen, and body temperature with medical-grade precision sensors."

    },
    {
        img: icon2,
        h1: "Sleep Analysis",
        content: "Advanced sleep tracking with detailed insights into your sleep stages cycles and quality."
    },
    {
        img: icon3,
        h1: "Long Battery Life",
        content: "Up to 7 days of battery life on a single charge with fast wireless charging."

    }
]
const Hero = ()=>{
    return(
        <section className="py-6 my-8 layout ">
            <div className="flex justify-center items-center py-6">
                <img src={image} alt="icon image" />
            </div>
            <hr />
            <div className="flex flex-col items-center  justify-center gap-6 py-6">
                <h2 className="text-4xl tracking-[6px]">Powerful Features, <span className="text-[#30D4D4]">
                    Minimal Design </span></h2>
                <p className="text-sm ">Everything you need to take control of your health and wellness, 
wrapped around your finger.</p>
            </div>
           
            <div className="flex justify-center items-center">
                <img src={arrow} alt="arrow" />
            </div>
            <div className="flex  flex-col sm:flex-row gap-10 sm:gap-5 pt-14 ">
                {
                    data.map((item)=>{
                        return(
                            <div key= {item.id}
                            className="bg-#212A2A flex flex-col border border-gray gap-7 rounded-xl
                            py-4 px-3  flex-1">
                                <img src={item.img} alt="image" 
                                className="w-[30px] h-[20px]"
                                />
                                <h1 className="text-2xl">{item.h1}</h1>
                                <p className="text-sm">{item.content}</p>

                                 </div>

                        )

                    })
                }
                
            </div>
        </section>
    )
}

export default Hero;