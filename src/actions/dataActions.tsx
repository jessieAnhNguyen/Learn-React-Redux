import { GET_RESPONSE, SET_RESPONSE, UPDATE_UNI_NAME } from "../reducers/dataReducer"

export type Action = {
    type: string;
    payload: any
}

export const changeUniName = (uniName: string) => (
    {
        type: UPDATE_UNI_NAME,
        payload: uniName,
    }
)

export const getResponse = (uniName: string) => (
    {
        type: GET_RESPONSE,
        payload: uniName
    }
)

export const setResponse = (response: any) => (
    {
        type: SET_RESPONSE,
        payload: response,
    }
)
