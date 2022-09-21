import React from 'react'
import { apiFetchBegin, apiFetchError, apiFetchSuccess } from './constants';

const initialState = {message:null, error:null}


const headerReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case apiFetchBegin:
           return{
            ...state
           }
        case apiFetchSuccess:
           return{
            ...state,
            message:action.payload
           }
        case apiFetchError:
           return{
            ...state,
            error:action.payload
           }
    
        default:
            return state;
    }
}

export default headerReducer;