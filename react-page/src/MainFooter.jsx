const MainFooter = () => {
    return (
        <footer className=" flex flex-col gap-15 layout  justify-center py-2 mt-8">
        <hr className="text-white opacity-90"/>
            <div className="flex flex-col sm:flex-row  gap-12 sm:gap-25 justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#30D4D4] text-2xl  ">Aura</h2>
                    <p>The future of health tracking, wrapped around your finger</p>
                </div>

                <div>
                    <h2 className="text-xl font-600">Product</h2>
                    <ul className="py-4">
                        <li>Features</li>
                        <li>Specifications</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>

                </div>

                <div>
                    <h2 className="text-xl font-600">Company</h2>
                    <ul className="py-4">
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Contacts</li>
                    </ul>

                </div>

                <div>
                    <h2 className="text-xl font-600">
                        Legal
                    </h2>
                    <ul className="py-4">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Warranty</li>
                        <li>Returns</li>
                    </ul>

                </div>
            </div>
            <hr  className="text-white opacity-90"/>

            <div className="text-sm pb-10 flex justify-center">


                2026 Aura All rights reserved.
            </div>

         
        </footer>

    )
}
export default MainFooter;