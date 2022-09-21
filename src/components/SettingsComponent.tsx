import React from "react";
import {useState} from "react";

const SettingsComponent = (props:any) => {

    const {axiosText, 
        handleHeader,
         handleDesc, 
          handleMessage} = props;

    return (
        <div className="card settings">
        <h3 className='underlined'>General Settings</h3>
  <button onClick={axiosText}> AXIOS BUTTON EXAMPLE</button>
        <h5 className='headlines'>Headline </h5>

    <input onChange={handleHeader}  className='input_gs' placeholder="NEW STUFF" />
        <h5 className='headlines'>  Description </h5>

    <input onChange={handleDesc} className='input_gs input-desc'
    placeholder="Sign up for our newsletter and 
    get %15 off your first order" />
        <h5 className='headlines'> Success Message </h5>
    <input onChange={handleMessage} className='input_gs' placeholder="Success" />
   </div>
    )
}

export default SettingsComponent;