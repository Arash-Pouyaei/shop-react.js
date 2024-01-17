import { ADD_PRODUCT , REMOVE_PRODUCT , EDIT_PRODUCT, INC_PRODUCTS_QTY, DEC_PRODUCTS_QTY } from "../actions/actionTypes";
import { datas } from "../../data/data";

export const productReducer = function(state=datas,action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state,action.payload];
        case REMOVE_PRODUCT:
            return state.filter((i) => action.payload !== i.ProductId)
        case EDIT_PRODUCT:
            return [...state.filter(item => item.ProductId !== action.payload.i.ProductId), action.payload.values]
        case INC_PRODUCTS_QTY:
            return state.map(i=>i.ProductId===action.payload.ProductId?i.Admin_ProductCount-1:i)
        case DEC_PRODUCTS_QTY:
            return state.map(i=>i.ProductId===action.payload.ProductId?i.Admin_ProductCount+1:i)
        default:
            return state
    }
}