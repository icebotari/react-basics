import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getUsers} from "../redux/actions/userActions";

function UserComponent () {
    const dispatch = useDispatch();
    const fetchUsers = async () => { //async functions explain
        const response = await axios.get("https://my-json-server.typicode.com/icebotari/fakeApi/users")
            .catch((error) => {
                console.log("error", error)
            })
        {

        }
        dispatch(getUsers(response.data));
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    const users = useSelector((state) => state.allUsers.users);
    const state = useSelector((state) => state)
    const renderList = users.map((user) => {
        console.log(user)
        console.log(state)
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        )
    });
    return (
        renderList
    )
}

export default UserComponent;

