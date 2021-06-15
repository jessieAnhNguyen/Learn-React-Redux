import {put, takeLatest, SagaReturnType} from "redux-saga/effects";
import { Action, setResponse } from "../actions/dataActions";
import { GET_RESPONSE } from "../reducers/dataReducer";
import { getResponse } from "../services/dataService";
import * as Effects from "redux-saga/effects";

export function* watchGetResponse() {
    yield takeLatest(GET_RESPONSE, handleGetResponse);
}
const call: any = Effects.call;
type ResponseBody = SagaReturnType<typeof getResponse>

function* handleGetResponse (action: Action) {
    try {
        const response: ResponseBody = yield call(getResponse, action.payload);
        const {data} = response;
        console.log(data);
        yield put(setResponse(data))
    } catch(error) {
        console.log(error);
    }

}