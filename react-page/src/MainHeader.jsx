import Button from "./Common/Button";
import icon from "../src/assets/icon1.png";
import { useState } from "react";
const data = [
    {id: 1,
        content: "Feature"
    },

    {id: 1,
        content: "Pricing"
    },

    {id: 1,
        content: "Resources"
    },

    {id: 1,
        content: "About Us"
    },
    {id: 1,
        content: "Contact"
    }

]

const MainHeader = ()=>{
    const [open, setOpen] = useState(false)
    return (
        <header className=" py-8 flex justify-between items-center layout bg-[#121212]">
            
            <div className="flex gap-2">
                <button className="lg:hidden relative z-1000" onClick={()=> setOpen((prev) => prev ? false : true)}>
                    {open ? 'close' : "menu"}
                </button>
                <img src={icon} alt="icon 1" 
                className="w-6.25 h-6.25"/>
                <p>AURA</p>
            </div>
            <div className={`absolute ${open ? 'left-0': '-left-200'} top-0 bg-black/20 w-1/2 h-full backdrop-blur-2xl lg:bg-transparent lg:relative lg:left-0 flex flex-col max-lg:p-6 justify-center lg:flex-row gap-8 transition-all duration-300 ease-linear`}> 
                {
                    data.map((item)=>{
                        return(
                            <div>
                                <nav>
                                    <ul key={item.id}>
                                        <li>{item.content}</li>
                                    </ul>
                                </nav>
                                </div>
                        )
                    })
                }

            </div>
            <div className="flex sm:gap-3 justify-between">
               <Button className={'text-white font-medium hover:bg-gray-300'}>
                    Log In
               </Button>

               <Button className='text-black font-medium border bg-[#30D4D4]' >
                Sign up
                </Button>
            </div>
        </header>
    )
}
export default MainHeader ;