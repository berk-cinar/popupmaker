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
        onSubmit
    } = props;

    return (
        <div className='popUpPage'>
          { showSuccess && <div>
          <img className='lentils' src="lentils.png" alt="lentils"/>
              <div className='card2'>
                  <button>
                      <img onClick={() => setShowDesc(!showDesc)} className='close-button' src="close_button.png" />
                  </button>
                      <h3 className='header' style={{fontFamily:font}}> {header} </h3> <br/>
                      <h3 className='detail' style={{fontFamily:font}}>  {desc}</h3>
          <br/>
              <div className='center'>
                  <input onChange={onChangeUsername} className='input' type="text" placeholder='Your Name'  />
                    <div>
                  <p className="alert-text">
                    <h5 className=" text-red-600">
                  {/*   { <img className="alert-logo" src="/alert.png" alt="alert" /> } */}
                  
               
                    {usernameAlert}
                    </h5>
                    </p>
                    </div>
                  <input onChange={onChangeEmail} className='input' type="text" placeholder='Email'  />
                  <p className="alert-text">
                 <h5 className="text-red-600">
           {/*       { <img className="alert-logo" src="/alert.png" alt="alert" /> } */}
                  {emailAlert}</h5>
                  </p>
                 <div>

      {error && <h2 className="invalidmail" style={{color: 'red'}}>{error}</h2>}
    </div>      
              <br/>

               
                <div>
                   {/*                   {popupMessage.map((item)) => {
                        return <a href="#"> {item.family} </a>
                    }
                    
                    } */}
            
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