import React, {useState} from 'react'
import Button from "./Button";
import AddNewUser from "./AddNewUser";
import UserComponent from "./UserComponent";
import '../style/table.css'
import {AgGridReact} from "ag-grid-react";
const UsersList = () => {
    const users = useState()
    return (
        <div>
            <div>
                <h1>Users List</h1>
                <Button buttonName={'Add new user'} component={AddNewUser}/>
                <AgGridReact
                    data={users}

                />


                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserComponent/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UsersList;
