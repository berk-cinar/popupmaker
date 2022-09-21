import react from "react";
import axios from "axios";
import { apiFetchSuccess, apiFetchError, apiFetchBegin } from "./constants";


export const axiosText = () =>(dispatch:any) => {
    axios.get('https://apiv2.popupsmart.com/api/googlefont')
    .then(resp => {
      dispatch({type:apiFetchSuccess, payload:resp.data})
    })
    .catch(error=> {
        dispatch({type:apiFetchError, payload:error})
    })
  }