export type Action = {
    type: "CHANGE_API_OPTION";
    payload: number
}

export const changeApiOption = (api_choice: number): Action => (
    {
        type: "CHANGE_API_OPTION",
        payload: api_choice,
    }
)