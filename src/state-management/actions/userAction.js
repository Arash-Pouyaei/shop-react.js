import { ADD_CART, ADD_USER , DEC_CART_QTY, EDIT_USER , INC_CART_QTY, REMOVE_CART, REMOVE_USER } from "./actionTypes";

export const add_user = (values) => ({
    type:ADD_USER,
    payload:values
})

export const remove_user = (id) => ({
    type:REMOVE_USER,
    payload:id
})

export const edit_user = (item,values) => ({
    type:EDIT_USER,
    payload:{item,values}
})

export const add_cart = (item,userId) => ({
    type:ADD_CART,
    payload:{item,userId}
})

export const remove_cart = (userId,ProductId) => ({
    type:REMOVE_CART,
    payload:{userId,ProductId}
})

export const inc_cart_qty = (userId,ProductId) => ({
    type:INC_CART_QTY,
    payload:{userId,ProductId}
})

export const dec_cart_qty = (userId,ProductId) => ({
    type:DEC_CART_QTY,
    payload:{userId,ProductId}
})