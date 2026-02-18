import  hand from "../src/assets/hand.png";
import Button from "./Common/Button";
const Cta = ()=>{
    return(
        <section className= "flex flex-col justify-center items-center gap-12 py-16 relative overflow-hidden layout">
            <h1 className="text-4xl  text-[#30D4D4] tracking-[2px]">
                Be the First to Experience Aura
            </h1>
            <p className="text-sm">Pre-order now and get exclusive early access pricing.
                 Limited quantities available.</p>
                 <div className="flex flex-col sm:flex-row   items-center gap-10">
                    <input type="email" placeholder="enter your email"
                   
                    className="border border-gray rounded-xl py-1 px-1  w-50 h-10  sm:w-85"/>
                    <Button className="text-black bg-[#30D4D4] w-40 rounded-xl">Notify Me</Button>

                 </div>
                 <div className="pt-15">
                    <ul className="flex gap-12 list-disc font-medium marker:text-2xl marker:text-[#30D4D4]"> 
                        <li> Free Shipping</li>
                        <li>30-Day return</li>
                        <li>2-Year warranty</li>
                    </ul>   
                 </div>
                 <img src={hand} alt="hand image" className="sm:absolute sm:-bottom-30 right-0 w-137.5 aspect-square" />


        </section>
    )
}
export default Cta;