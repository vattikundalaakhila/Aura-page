import image from "../src/assets/Feature2.png"
import Button from "./Common/Button";

const Features1 = ()=>{
    return(
        <section className = "flex  flex-col sm:flex-row py-10  gap-14 layout items-center">
            <div className="flex flex-col gap-16 flex-1 pr-5">
                <h2 className="text-5xl text-[#30D4D4] tracking-[3px]">
                    Wireless Charging

                </h2>
                <p>Modern smart rings are evolving with wireless charging technology,
                     offering a seamless and cable-free power experience. This innovation allows 
                     users to charge their rings effortlessly by simply placing them on a compatible charging dock or
                     pad — no physical connectors required.</p>

                     <div className="flex  justify-between sm:justify-start sm:gap-4">
                        <Button className='bg-[#30D4D4]'>Pre-order Now</Button>
                        <Button className="border border-[#30D4D4]">View Details</Button>
                     </div>



            </div>
            <div className="flex-1">
                <img src={image} alt="image" />

            </div>
        </section>
    )

}
export default Features1;