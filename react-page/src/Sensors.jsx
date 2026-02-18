import image from "../src/assets/Sensor.png"

const Sensors = ()=>{
    return(
        <section className="flex flex-col justify-center items-center py-10 my-5 layout" >
            <h1 className="text-3xl tracking-[3px] text-[#30D4D4]">Advanced Sensors</h1>
            <div className="py-4">
                <img src={image} alt="image"
                className="w-[500px] h-[400px] sm:w-[500px] sm:h-[500px]" />

            </div>

        </section>
    )
}
export default Sensors;