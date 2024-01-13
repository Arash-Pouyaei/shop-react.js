import { ADD_PRODUCT , EDIT_PRODUCT , REMOVE_PRODUCT } from "./actionTypes";

export const add_product = (values) => ({
    type:ADD_PRODUCT,
    payload:values
})

export const edit_product = (values,i) => ({
    type:EDIT_PRODUCT,
    payload:{values,i}
})

export const remove_product = (id) => ({
    type:REMOVE_PRODUCT,
    payload:id
})