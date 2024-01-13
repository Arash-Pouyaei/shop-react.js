import { ADD_PRODUCT , REMOVE_PRODUCT , EDIT_PRODUCT } from "../actions/actionTypes";
import { datas } from "../../data/data";

export const productReducer = function(state=datas,action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state,action.payload];
        case REMOVE_PRODUCT:
            return state.filter((i) => action.payload !== i.ProductId)
        case EDIT_PRODUCT:
            return [...state.filter(item => item.ProductId !== action.payload.i.ProductId), action.payload.values]
        default:
            return state
    }
}