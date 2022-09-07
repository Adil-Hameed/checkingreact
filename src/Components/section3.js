import React from "react";
import { IoIosArrowDropright } from "react-icons/io"
function Section3(props) {
    return (
        <div className="bg-white border border-red-500 mx-6 px-8 py-28">
            {props.data.icon}
            <h1>{props.data.h1}</h1>
            <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
            <IoIosArrowDropright />
        </div>
    )
};
export default Section3