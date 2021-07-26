import { actionType } from "../constants/action-types"

const initialState = {
     products: [
          {
               id:1,
               title:"books"     
     }
     ],
}
export const productReducer=(state= initialState,{type,payload}) => {
     switch (type) {
          case actionType.SET_PRODUCTS:
               return state
          default:
               return state
     }
}