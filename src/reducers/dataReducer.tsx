import React from 'react'
import {Action} from '../actions/dataActions'

export interface DataState {
    option: number;
}

const initialState = {
    option: 0
}


const dataReducer = (state: DataState = initialState, action: Action) => {
    switch(action.type) {
        case "CHANGE_API_OPTION": {
            return {...state, option: action.payload}
        }
        default:
            return state;
    }
}

export default dataReducer

