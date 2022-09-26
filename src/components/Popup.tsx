import React from 'react'

import "../styles/settings.scss"
import "../styles/success.scss"
import "../styles/popup.scss"

import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { axiosText } from '../redux/action';
import SuccessComponent from "./SuccessComponent";
import SettingsComponent from './SettingsComponent';
import PopupComponent from './PopupComponent';

const Popup = () => {
  const dispatch= useDispatch()
  useEffect(
    () => {
      dispatch(axiosText()as any)
    }, [dispatch]
  )

  const reduxMessage = useSelector((state:any) => state.header.message);

  const [header, setHeader] = useState("NEW STUFF")
  const [desc, setDesc] = useState("Sign up for our newsletter and get %15 off your first order !")
  const [success, setSuccess] = useState("SUCCESS");
  
  const [showDesc, setShowDesc] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true)
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const [usernameAlert, setUsernameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState("");
  const [logoShow, setLogoShow] = useState("");
  const [dataState, setDataState] = useState([])

  const isValidEmail = (email: any) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event:any) => {
    if (!isValidEmail(event.target.value)) {
      setError('Invalid email address');
    } else {
      setError("");
    }

    setMessage(event.target.value);
  };

  const onSubmit = (e:any) => {
    if (username.length === 0 ) {
      setUsernameAlert("This place is required")
    } 
    if (username.length !== 0 ) {
      setUsernameAlert("");
    } 

    if(email.length === 0) {
      setEmailAlert("This place is required")
    }
    if(email.length !== 0) {
      setEmailAlert("")
    }
    if (username.length !== 0 && email.length  !== 0 ) {
        setShowSuccess(!showSuccess);
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('email'))
    }
}

 const onChangeUsername = (e: any) => {
    setUsername(e.target.value)
}
const onChangeEmail = (event: any) => {
    setEmail(event.target.value);

    if (!isValidEmail(event.target.value)) {
      setError('Invalid email address');
    } else {
      setError("");
    }
}

  const handleHeader = (e: any) => {
    setHeader(e.target.value);
  }
  const handleDesc = (e: any) => {
    setDesc(e.target.value);
  }
  const handleMessage = (e: any) => {
    setSuccess(e.target.value);
  }

  return (
     <div className="grid 
     grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
     ">
      <div className="h-100 md:col-start-1 col-end-2 ">
        {/*  col-start-1 col-end-2  */}  
        <SettingsComponent
              axiosText={axiosText} 
              handleHeader={handleHeader}
              handleDesc={handleDesc} 
              handleMessage={handleMessage}   />
     </div>
      <div className="h-60  popup md:col-end-5 col-span-3">
        {/* /* col-end-5 col-span-3 */ }
    <SuccessComponent 
            success={success} 
            showSuccess={showSuccess} /> 
     <PopupComponent 
            reduxMessage={reduxMessage}
            showSuccess={showSuccess}
            showDesc={ showDesc}
            setShowDesc={setShowDesc}
            header={header}
            onChangeEmail={onChangeEmail}
            onChangeUsername={onChangeUsername}
            usernameAlert={usernameAlert}
            error={error}
            emailAlert={emailAlert}
            desc={desc}
            onSubmit={onSubmit}  />
       </div>
      </div>
  )
};

export default Popup;