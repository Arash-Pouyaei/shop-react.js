import { ADD_PRODUCT , DEC_PRODUCTS_QTY, EDIT_PRODUCT , INC_PRODUCTS_QTY, REMOVE_PRODUCT } from "./actionTypes";

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

export const inc_products_qty = (ProductId) => ({
    type:INC_PRODUCTS_QTY,
    payload:ProductId
})

export const dec_products_qty = (ProductId) => ({
    type:DEC_PRODUCTS_QTY,
    payload:ProductId
})