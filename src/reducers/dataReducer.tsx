import React from 'react'
import {Action} from '../actions/dataActions'

export const UPDATE_UNI_NAME = "UPDATE_UNI_NAME";
export const GET_RESPONSE = "GET_RESPONSE";
export const SET_RESPONSE = "SET_RESPONSE";


export interface DataState {
    uniName: string;
    uniResponse?: any
}

const initialState = {
    uniName: "",
}


const dataReducer = (state: DataState = initialState, action: Action) => {
    switch(action.type) {
        case "UPDATE_UNI_NAME": {
            return {...state, uniName: action.payload}
        }
        case "SET_RESPONSE": {
            return {...state, uniResponse : action.payload }
        }
        default:
            return state;
    }
}

export default dataReducer

