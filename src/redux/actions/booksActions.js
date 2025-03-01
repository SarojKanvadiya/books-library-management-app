import axios from "axios";

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const ADD_BOOK_TO_USER_LIST = 'ADD_BOOK_TO_USER_LIST';
export const FETCH_MY_BOOKS = 'FETCH_MY_BOOKS';
export const UPDATE_BOOK_STATUS = 'UPDATE_BOOK_STATUS';
export const UPDATE_BOOK_RATING = 'UPDATE_BOOK_RATING';

export const book = ()=>async() =>{
    try {
        const reponse = await axios.get('https://open-jeweled-amphibian.glitch.me/books')

        console.log(reponse)
        
    } catch (error) {
        console.log(error)
    }
}