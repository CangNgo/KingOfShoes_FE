import { DOMAIN } from ".";
import axiosJWT from "../config/axiosJWTConfig";
import { CheckOutLocation } from "../pages/user/Checkout";
const baseURL= "/skeleton/public/v1/order"
export const addOrder = async (data:CheckOutLocation[])=>{
    try {
        const response = await axiosJWT.post(`${DOMAIN}${baseURL}`, data)
        return response.data
    } catch (error) {
        console.log("lỗi axios" ,error);
        throw new Error
    }

}