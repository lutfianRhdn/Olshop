import { api } from "../../config/api";
import { actionType } from "../constants/action-types";
// export const setProduct= (products)=>{
//      return {
//           type:actionType.SET_PRODUCT,
//           payload:products
//      }
// }
export const deleteProduct = (data, token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api()
      .remove(`/product/${data.id}`, {}, token)
      .then((response) => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
