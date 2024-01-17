import { ADD_CART, ADD_USER , DEC_CART_QTY, EDIT_USER , INC_CART_QTY, REMOVE_CART, REMOVE_USER } from "../actions/actionTypes";
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
                ? { ...user, cart: [...user.cart.filter(i=>i.ProductId!==action.payload.ProductId)] }
                : user
                
            );
        case INC_CART_QTY:
            return state.map((user) =>
                user.userId === action.payload.userId
                    ? {
                        ...user,
                        cart: user.cart.map((item) =>
                            item.ProductId === action.payload.ProductId&&item.Admin_ProductCount-1>=item.User_ProductCount&&item.Admin_ProductCount>0
                                ? { ...item, User_ProductCount: item.User_ProductCount + 1 }
                                : item
                        ),
                    }
                    : user
            );
            
        case DEC_CART_QTY:
            return state.map((user) =>
                user.userId === action.payload.userId
                    ? {
                        ...user,
                        cart: user.cart.map((item) =>
                            item.ProductId === action.payload.ProductId && item.User_ProductCount > 0 && item.Admin_ProductCount>0
                                ? { ...item, User_ProductCount: item.User_ProductCount - 1 }
                                : item
                        ),
                    }
                    : user
            );
        default:
            return state
    }
}