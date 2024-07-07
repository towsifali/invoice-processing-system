import axios from 'axios';

const API_URL = "http://localhost:8080";

export const saveInvoice = async (payload) =>{
    try {
        return await axios.post(`${API_URL}/invoice`,payload);
    } catch (error) {
        console.log("Error: ", error.message);
        return error.response.data;
    }
}

export const getAllInvoice = async () =>{
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        if(error.response){
            console.log("Error: ", error.message);
            return error.response.data;
        } else {
            console.log("backend is not running");
            return "No pending invoices found.";
        }
    }
}

export const deleteInvoice = async (id) =>{
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        console.log("Error: ", error.message);
        return error.response.data;
    }
}

export const payInvoice = async (id) =>{
    try {
        return await axios.put(`${API_URL}/invoice/${id}`);
    } catch (error) {
        console.log("Error: ", error.message);
        return error.response.data;
    }
}