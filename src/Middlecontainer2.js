import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import pic1 from "./asset/images/Asset 23.svg";
import pic2 from "./asset/images/Asset 23.svg";
import pic3 from "./asset/images/Asset 28.svg";
import pic4 from "./asset/images/4208-01-flat-bold-business-plan-template-16x9-4-870x489.jpg";
import pic5 from "./asset/images/4208-01-flat-bold-business-plan-template-16x9-4-870x489.jpg";
import pic6 from "./asset/images/4208-01-flat-bold-business-plan-template-16x9-4-870x489.jpg";
import pic7 from "./asset/images/4208-01-flat-bold-business-plan-template-16x9-4-870x489.jpg";


const Middlecontainer2 = () => {
  return (
       <>
       
    
       <div class="container-fluid middlecontainer02">
        <img class="bg-style-1" src={pic1} alt=""></img>
        <img class="bg-style-2" src={pic2} alt=""></img>
        <img class="bg-style-3" src={pic3} alt=""></img>
        <div class="row row-content">
            <div class="col-12 col-sm-6 text-center">
                <img class="comp01 comp img-fluid" src={pic4} alt=""></img>
            </div>
            <div class="col-12 col-sm-6 text-center">
                <p class="about01 ">This is a major challenge</p>
                <p class="des01">Exceptional job of visually and progressively<br></br>the story of their product in a simple and is<br></br>digest way. This is a major challenge for my<br></br>tups, especially when they're introducing an<br></br>epts to existing markets. People want it.</p>
            </div>
        </div>
        <div class="row row-content">
            <div class="col-12 col-sm-6 text-center order-sm-last">
                <img class="comp02 comp img-fluid" src={pic5} alt=""></img>
            </div>
            <div class="col-12 col-sm-6 text-center">
                <p class="about01">This is a major challenge</p>
              <p class="des01">Exceptional job of visually and progressively<br></br>the story of their product in a simple and is<br></br>digest way. This is a major challenge for my<br></br>tups, especially when they're introducing an<br></br>epts to existing markets. People want it.</p>
            </div>
        </div>
        <div class="row row-content">
            <div class="col-12 col-sm-6 text-center">
                <img class="comp03 comp img-fluid" src={pic6} alt=""></img>
            </div>
            <div class="col-12 col-sm-6 text-center">
                <p class="about01 ">This is a major challenge</p>
                <p class="des01">Exceptional job of visually and progressively<br></br>the story of their product in a simple and is<br></br>digest way. This is a major challenge for my<br></br>tups, especially when they're introducing an<br></br>epts to existing markets. People want it.</p>
            </div>
        </div>
        <div class="row row-content">
            <div class="col-12 col-sm-6 text-center order-sm-last">
                <img class="comp04 comp img-fluid" src={pic7} alt=""></img>
            </div>
            <div class="col-12 col-sm-6 text-center">
                <p class="about01">This is a major challenge</p>
              <p class="des01">Exceptional job of visually and progressively<br></br>the story of their product in a simple and is<br></br>digest way. This is a major challenge for my<br></br>tups, especially when they're introducing an<br></br>epts to existing markets. People want it.</p>
            </div>
        </div>
    </div>
       </>
  );
};

export default Middlecontainer2;
