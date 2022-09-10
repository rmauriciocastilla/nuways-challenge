import axios from 'axios';
import { GET_CONTACTS } from './variables';

export const getContacts = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`https://address-book-nuways.herokuapp.com/api`);
        window.localStorage.setItem('contacts',JSON.stringify(data))
        const contactsLocal = window.localStorage.getItem('contacts');
        return dispatch({type:GET_CONTACTS,payload:JSON.parse(contactsLocal)})
    } catch (error) {
        console.log(error);
    }
}

export const deleteContact = (id) => async ()=>{
    try {
        await axios.delete(`https://address-book-nuways.herokuapp.com/api/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const createContact = (data)=>async()=>{
    try {
        await axios.post(`https://address-book-nuways.herokuapp.com/api/`,data);
    } catch (error) {
        console.log(error);
    }
}

export const updateContact = (data,id)=>async()=>{
    try {
        await axios.put(`https://address-book-nuways.herokuapp.com/api/${id}`,data);
    } catch (error) {
        console.log(error);
    }
}