import Button from "./Common/Button";
import image from "../src/assets/FeatureImage.png"

const Features = ()=>{
    return(
        <section className="flex flex-col sm:flex-row py-10  gap-14 layout items-end">
            <div className="flex flex-col gap-16 flex-1 sm:pr-5 ">
                
            <h2 className="text-4xl text-[#30D4D4] tracking-[3px] ">Always-On Health Monitoring</h2>
            <p className="text-sm ">An advanced smart ring is a compact, wearable device designed to 
                continuously monitor your body’s health metrics using integrated 
                sensors. Unlike bulky smartwatches, it offers 24/7 tracking with 
                discreet comfort and high accuracy. </p>
                

<div className="flex justify-between sm:justify-start gap-4">
    <Button className='bg-[#30D4D4]'> Pre-Order Now</Button>
    <Button className="border border-[#30D4D4]">View Details</Button>
</div>
</div>



<div className="flex-1">
    <img src={image} alt="image" 
    className="w-[500px] h-[500px]"/>
</div>
        </section>
    )
}
export default Features;