import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./Middlecontainer.css"


const Middlecontainer = () => {
  return (
       <>
       
       
       <div class="container middlecontainer01">
        <div class="row row-content">
            <div class="col-12 col-sm-12">
                <div class="text-center">
                    <p class="letus">Let us know your interest.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn1 btn btns btn-primary" href="#" role="button"><h4 class="text01 texts">A.I / ML</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center ">
                <a class=" common btn2 btn btns btn-primary" href="#" role="button"><h4 class="text02 texts">Data <br></br> Science</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn3 btn btns btn-primary" href="#" role="button"><h4 class="text03 texts">Robotics</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn4 btn btns btn-primary" href="#" role="button"><h4 class="text04 texts">Cloud <br></br> Computing</h4></a>
            </div>
        </div>
        <div class="row row-content">
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn5 btn btns btn-primary" href="#" role="button"><h4 class="text05 texts">Nano <br></br>Tech</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn6 btn btns btn-primary" href="#" role="button"><h4 class="text06 texts">Animation</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn7 btn btns btn-primary" href="#" role="button"><h4 class="text07 texts">I.O.T</h4></a>
            </div>
            <div class="col-6 col-sm-3 text-center">
                <a class=" common btn8 btn btns btn-primary" href="#" role="button"><h4 class="text08 texts">Cyber <br></br> Security</h4></a>
            </div>
        </div>
        <div class="row row-content">
            <div class="col-12 text-center">
                <a class=" get_started btn btn-primary" href="#" role="button">GET STARTED</a>
            </div>
        </div>
    </div>
       </>
  );
};

export default Middlecontainer;
