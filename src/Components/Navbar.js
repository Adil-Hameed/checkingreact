import React from "react";
import Hamela from "../Assets/Hamela.png"
import phone from "../Assets/phone-call.png"

function Navbar() {
    return (
        <>
            <div className="Header w-full h-96">
                <div className="grid grid-cols-10  w-[80%] mx-auto text-white">
                    <div className="border">
                        <img src={Hamela} alt="" />
                    </div>

                    <ul className="flex  justify-between items-center col-span-6 border">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>PROJECTS</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>


                    <div className=" col-span-2 ">
                        <p className="w-full text-right">Phone Services</p>
                        <h1 className="w-full text-right">555 666 999 00</h1>
                    </div>

                    <div className="bg-[#FFA800] flex justify-center items-center">
                        <img src={phone} alt="" />
                    </div>
                </div>

                <div className="container border mx-auto">
                    <p>
                        TO CONSIDER FOR
                    </p>
                    <h1>
                        OUR UX/UI <br />
                        DESIGN AGENCY.
                    </h1>
                    <p>
                        Phasellus vel elit efficitur, gravida libero sit amet, scelerisque tortor arcu, commodo sit amet gravida scelerisque nulla Phasellus sed.
                    </p>
                    <button>
                        DISCOVER MORE
                    </button>
                </div>

            </div>
        </>

    );

}
export default Navbar;