import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeApiOption } from '../actions/dataActions';
import { DataState } from '../reducers/dataReducer';

function Data() {

    const option = useSelector<DataState, DataState["option"]> (
        (state) => state.option
    )
    const dispatch = useDispatch();
    const onChangeApiOption = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeApiOption(+event.target.value));
    };



    return (
        <div>
            <h3>Fetch API and display data</h3>
            <input 
                type="text" 
                onChange={onChangeApiOption}
                name="api_choice" 
                id="api_choice"
            />
            <span>Current API choice is {option}</span>
            <div>
                <button>Go!</button>
            </div>
        </div>
    )
}

export default Data
