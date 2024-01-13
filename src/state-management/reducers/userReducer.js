import { ADD_CART, ADD_USER , EDIT_USER , REMOVE_CART, REMOVE_USER } from "../actions/actionTypes";
import { users } from "../../data/data";

export const userReducer = function(state=users,action) {
    switch (action.type) {
        case ADD_USER:
            return [...state,action.payload]
        case REMOVE_USER:
            return state.filter(item=>action.payload===item.id)
        case EDIT_USER:
            return [...state.filter(item => action.payload.item.id !== item.id) ,  action.payload.values]
        case ADD_CART:{
            return state.map((user) =>
                user.userId === action.payload.userId
                ? { ...user, cart: [...user.cart, action.payload.item] }
                : user
            );}
        case REMOVE_CART:
            return state.map((user) =>
                user.userId === action.payload.userId
                ? { ...user, cart: [...user.cart.filter(i=>i.productId!==action.payload.productId)] }
                : user
                
            );
        default:
            return state
    }
}