import React from "react";
import img1 from "../Assets/img-about.jpg"
function Section2() {
    return (
        <div className="container grid grid-cols-2 mx-auto">
            <div>
                <p>ABOUT US</p>
                <h1>
                    OUR 10 YEARS WORKING
                    EXPERIENCE DESIGN.
                </h1>
                <p>
                    Nulla feugiat aliquam purus, ac ultrices augue aliquam vel.
                    Sed venenatis a nunc.
                </p>
                <p>
                    Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Aliquam consectetur, ex in gravida porttitor.
                </p>
            </div>
            <div className="border">
                <img className="" src={img1} alt=""></img>
            </div>
        </div>
    );
}
export default Section2