import { createStore } from 'redux'
import dataReducer from '../reducers/dataReducer'

export const store = createStore(dataReducer);
