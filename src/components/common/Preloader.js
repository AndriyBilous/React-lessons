import SpinnerImg from "../../Assets/Images/SpinnerImg.svg"
import React from "react";

let Preloader = (props) => {
    return  <div style={{display: 'flex', width: "100%", height: '100px', alignItems: 'center'}}>
                <img src={SpinnerImg} style={{height: '100%'}}/>
            </div>
}

export default Preloader;