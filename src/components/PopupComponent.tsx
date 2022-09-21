import axios from "axios";

import {useState} from "react";

const PopupComponent = (props:any) => {

    const [font, setFont] = useState("Inter");

    const {showSuccess,
        showDesc,
        setShowDesc,
        header,
        onChangeEmail,
        onChangeUsername,
        usernameAlert,
        error,
        emailAlert,
        desc,
        onSubmit,
        reduxMessage
    } = props;

    const handleDropdown = (event:any) => {
        setFont(event.target.value)
    }

    return (
        <div className='popUpPage'>
        { showSuccess && <div>
        <img className='lentils' src="lentils.png" alt="lentils"/>
            <div className='card2'>
            <button>
                <img onClick={() => setShowDesc(!showDesc)} className='close-button' src="close_button.png" />
            </button>
              <h3 className='header' style={{fontFamily:font}}> {header} </h3> <br/>
              <h4 className='detail' style={{fontFamily:font}}>  {desc}</h4>
          <br/>
              <div className='center'>
                  <input onChange={onChangeUsername} className='input' type="text" placeholder='Your Name'  />
                    <div>
                  <p>
                    <h5 className="alert-text text-red-600">
               {/*     { {usernameAlert} !== "" ?  <img className="alert-logo" src="/alert.png" alt="alert" /> : "" } */}
               { 
                  
               }
                    {usernameAlert}
                    </h5>
                    </p>
                    </div>
                  <input onChange={onChangeEmail} className='input' type="text" placeholder='Email'  />
                 <h5 className="alert-text text-red-600"
                 >
                 {/*   { <img className="alert-logo" src="/alert.png" alt="alert" /> } */}
                  {emailAlert}</h5>
                 <div>

      {error && <h2 className="invalidmail" style={{color: 'red'}}>{error}</h2>}
    </div>
                  
                  
              <br/>
              <div className="dropdown ">
                <button className="dropbtn">
                  <h4 className="text"> {font}  </h4> 
                <img className='dropdown-vector'  src="/dropdown-vector.png" />
                <select className="dropdown-content" onChange= {handleDropdown} >
                    {reduxMessage && reduxMessage.map(function(item:any){
                        return <option  value={item.family} > {item.family} </option>
                    } )}
                    </select>

                </button>
               
                <div>
   


  {/*                   {popupMessage.map((item)) => {
                        return <a href="#"> {item.family} </a>
                    }
                    
                    } */}

              </div>
            </div>
              <br/>
            <button onClick={onSubmit} className="button">
              GET MY 30% OFF
            </button>
            
              </div>
            </div>
            </div>
        }
        </div>
    )
}


export default PopupComponent;