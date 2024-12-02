import axiosJWT from "../config/axiosJWTConfig"
import { DOMAIN } from './index';

export const findAllProduct = async () => {
    try {
        const response = await axiosJWT.get(`${DOMAIN}/skeleton/public/v1/product`)
        return response.data
    } catch (error) {
        console.error('Error fetching all activities:', error);
        throw error;
    }
}