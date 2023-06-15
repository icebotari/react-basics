import {ActionTypes} from "../actions/actionTypes";
import {initialState} from "../userStore/initialState";
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            state = {users: action.payload}
            return {...state, users: action.payload}
        case ActionTypes.ADD_USER:
            return state
        case ActionTypes.UPDATE_USER:
            return state
        case ActionTypes.DELETE_USER:
            return state
        default:
            return state;
    }
}
