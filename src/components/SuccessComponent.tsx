import React from "react";
import {useState} from "react";

const SuccessComponent = (props:any) => {

    const {showSuccess,success} = props;

    return (
    <div >
    { !showSuccess && 
        <div className='background'>
    {/*     <img className='lentils' src="lentils.png" alt="lentils"/> */}
    <div className='layer'>
    <div className='success-card'>
        <div>
        <img className='success-img' src="success-image.png" alt="success-image" /> <br/>
            <h1 className='success-msg'> 
            {success}
            </h1>
        </div>
        </div>
    </div>
    </div>
    }
    </div>
    )
}

export default SuccessComponent;