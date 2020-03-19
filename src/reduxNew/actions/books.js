import { SET_BOOKS } from "./actionType";
import axios from "axios";

const instance = axios.create({
    baseURL:"https://the-index-api.herokuapp.com"
});

export const fetchAllBooks =()=> async dispatch =>{
    try {
        const response = await instance.get("/api/books/");
        const books = response.data;
        dispatch({type:SET_BOOKS,payload:books});
    } catch (error) {
        console.error(error);
    }
}