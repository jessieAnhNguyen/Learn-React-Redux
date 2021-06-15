import { createStore, applyMiddleware } from "redux";
import dataReducer from '../reducers/dataReducer'
import createSagaMiddleware from "redux-saga";
import { watchGetResponse } from '../sagas/dataSagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(dataReducer, applyMiddleware(...middleware));

sagaMiddleware.run(watchGetResponse);
