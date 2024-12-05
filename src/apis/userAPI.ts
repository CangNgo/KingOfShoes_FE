import axiosJWT from "../config/axiosJWTConfig";
import { SignIn } from "../types/userTypes";
import { DOMAIN } from './index';

const apiSigIn = "/skeleton/public/v1/user";
export const addUser=async (signIn:SignIn) =>{
    try {
        const response = await axiosJWT.post(`${DOMAIN}${apiSigIn}`,signIn)
        console.log(response.data);
        
        return response.data
    } catch (error) {
        throw new Error
    }
}