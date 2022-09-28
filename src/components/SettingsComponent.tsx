import React from "react";
import {useState} from "react";
import { FontSlider } from "./FontSlider";

const SettingsComponent = (props:any) => {

    
    const { 
        handleHeader,
        handleDesc, 
        handleMessage,
        reduxMessage} = props;

        const handleDropdown = (event:any) => {
            setFont(event.target.value)
        }
        
        const [font, setFont] = useState("Roboto");

    return (
        <div className="card settings">
        <h3 className='underlined'>General Settings</h3>
        <h5 className='headlines'>Headline </h5>

    <input onChange={handleHeader}  className='input_gs' placeholder="DONT MISS UPDATES" />
        <h5 className='headlines'>  Description </h5>

    <input onChange={handleDesc} className='input_gs input-desc'
    placeholder="Sign up for our newsletter and 
    get %15 off your first order" />

        <h5 className='headlines'> Success Message </h5>
    <input onChange={handleMessage} className='input_gs' placeholder="Success" />
        <div>
                        <h5 className='headlines'> Pick Text Font </h5>
                    <select className='select' onChange= {handleDropdown} placeholder="Roboto" >
                        <option value="0"> {font} </option>
                      {reduxMessage && reduxMessage.map(function(item:any){
                          return <option value={item.family} > {item.family} </option>  
                        } )}
                    </select>
                   {/*      <h5 className='headlines'> Pick Text Size </h5>
                        <FontSlider/>
 */}





<br /><br />
                {/* </button> */}
        </div>
   </div>
    )
}

export default SettingsComponent;