import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import pic from "./asset/images/other elem-01.svg";


const Middlecontainer3 = () => {
  return (
       <>
         
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 text-center">
                <p class="desc01">We build healthier, happier workplaces.</p>
                <img class="objects" src={pic} alt=""></img>
            </div>
        </div>
    </div>
         
       </>
  );
};

export default Middlecontainer3;
