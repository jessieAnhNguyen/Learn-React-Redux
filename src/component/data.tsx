import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeUniName, getResponse } from '../actions/dataActions';
import { DataState } from '../reducers/dataReducer';
import { Button, Header, Input, Table } from 'semantic-ui-react';

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
    
    return (
        <div>
            <Header as='h3'>Fetch universities API and display data</Header>
            <Input icon='search' placeholder='Search...' onChange={onChangeUniName} />
            <p>Current university name is {uniName}</p>
            {/* <div>
                <button onClick={getAPI}>Go!</button>
            </div> */}
            <Button primary onClick={getAPI}>Go!</Button>
            {/* <ol>
                {
                response &&
                response.map((item: any) => {
                    return (
                        <li>
                            <ul>
                                <li key={item.name}>{item.name}</li>
                                <li key={item.web_pages}>{item.web_pages}</li>
                                <li key={item.country}>{item['country']}</li>
                            </ul>
                        </li>
                    
                    );
                })
                }
            </ol> */}

            {response && 
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>University Name</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Domain</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                    response.map((item: any) => {
                        return (
                            <Table.Row>
                                <Table.Cell key={item.name}>{item.name}</Table.Cell>
                                <Table.Cell key={item.web_pages}>{item.web_pages}</Table.Cell>
                                <Table.Cell key={item.domains}>{item.domains}</Table.Cell>
                                <Table.Cell key={item.country}>{item['country']}</Table.Cell>
                            </Table.Row>
                        
                        );
                    })
                    }
      
                </Table.Body>
            </Table>
            }
            
        </div>
    )

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
}

export default Data
