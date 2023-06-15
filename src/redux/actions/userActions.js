import {ActionTypes} from "./actionTypes";
import axios from "axios";

export const getUsers = (users) => {
    return {
        type: ActionTypes.GET_USERS,
        payload: users
    }
}
export const addUser = (user) => {
    return (dispatch) => {
        axios.post('', {user})
            .then(response => {
                dispatch({
                    type: ActionTypes.ADD_USER,
                    payload: response.data
                })
                    .catch(error =>{
                        console.log("update user error")
                    })
            })

    }
}
export const updateUser = (user) => {
    return {
        type: ActionTypes.UPDATE_USER,
        payload: user
    }
}
export const deleteUser = (user) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: user
    }
}


