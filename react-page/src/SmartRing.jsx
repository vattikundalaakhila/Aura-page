import image1 from "../src/assets/image1.png"
import image2 from "../src/assets/image2.png";

const data = [
    {
        id: 1,
        content: "Convertible design"
    },
    {
        id: 2,
        content: "Smart health sensors"

    },
    {
        id: 3,
        content: "Wireless charging"

    }, {
        id: 4,
        content: "Dual mode functionality (Ring and Bracelet)"

    }, {
        id: 5,
        content: "Magnetic/expandable mechanism"

    },
    , {
        id: 6,
        content: "AI integration"

    }
    , {
        id: 7,
        content: "Durable flexible materials"

    } ,
    , {
        id: 8,
        content: "Seamless Bluetooth connectivity"

    }, 
    , {
        id: 9,
        content: "Fashion tech fusion"

    },
    , {
        id: 10,
        content: "Real-time data tracking"

    }


]
const SmartRing = () => {
    return (
        <section className="flex flex-col gap-6 bg-[#121212] py-14 relative layout">

            <div className="flex flex-col gap-2 justify-center items-center">
                <h2 className="text-3xl text-[#30D4D4] tracking-[4px]">Upgrading Smart Ring</h2>
                <p className="text-lg">From Ring to Bracelet</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
                <div className="sm:basis-1/3">
                    <img src={image1} alt="image1" />
                </div>

                <div className="sm:basis-1/3 sm:relative z-10">

                    <ul className="space-y-6">
                        {data.map((item) => {
                            return (
                                <li key={item.id} className="text-center">
                                    {item.content}

                                </li>


                            )
                        })}
                    </ul>



                </div>
                <div className=" basis-1/3 sm:absolute sm:right-0 -top-10 sm:w-[50%]">
                    <img src={image2} alt="image2" className=" w-full  h-full " />
                </div>


            </div>
        </section>
    )
}
export default SmartRing;