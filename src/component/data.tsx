import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeUniName, getResponse } from '../actions/dataActions';
import { DataState } from '../reducers/dataReducer';

function Data() {

    const uniName = useSelector<DataState, DataState["uniName"]> (
        (state) => state.uniName
    )
    const response = useSelector<DataState, DataState["uniResponse"]> (
        (state) => state.uniResponse
    )

    const dispatch = useDispatch();
    const onChangeUniName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeUniName(event.target.value));
    };

    const getAPI = () => {
        dispatch(getResponse(uniName));
    };

    // const listOfNames = (listHere:[]):string => {
    //     let toReturn:string = "";

    //     listHere.map((eachItem:any)=>{
    //        toReturn = toReturn + eachItem.name;
    //     })

    //     console.log("returning");
    //     console.log(toReturn);

    //     return listHere[0];
    // }

    const displayResponse = () => {
        console.log("hello")
        if(!response) {
            return(
                <h3>what </h3>
            );
        }
        else{
            let toReturn:string = "test";
            response.map((eachItem:typeof response[0])=>{
                console.log(eachItem.name)
                toReturn = toReturn + eachItem.name + "\n";
            })
            console.log("Printing type")
            console.log(typeof response[0].name)
            console.log(typeof toReturn);
            return response[0].name + response[1].name +response[2].name + response[3].name+response[4].name;
            // return toReturn;
        }
        // if (response.length > 0) {
        //     console.log("its not empty");
        //     console.log(response)
        //     return (
        //         response.map((item: any) => {
        //             return (<></>
        //                 // <div key={item.name}>
        //                 //     Here is 
        //                 //     <p>{item.name}</p>
        //                 // </div>
        //             )
        //         })
        //     )
        // }
        // else {
        //     return (
        //         <h3>No response</h3>
        //     )
        // }
    }

    return (
        <div>
            <h3>Fetch API and display data</h3>
            <input 
                type="text" 
                onChange={onChangeUniName}
                name="uniName" 
                id="uniName"
            />
            <span>Current university name is {uniName}</span>
            <div>
                <button onClick={getAPI}>Go!</button>
            </div>
            <textarea name="" id="" value={displayResponse()} cols={30} rows={10}></textarea>
        </div>
    )
}

export default Data
