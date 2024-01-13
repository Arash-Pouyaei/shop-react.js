import { ADMINS } from "../actions/actionTypes"
import { admins } from "../../data/data";

export const adminReducer = function(state=admins,action){
    switch (action.type) {
        case ADMINS:
            return[...state];
        default:
            return state
    }
}