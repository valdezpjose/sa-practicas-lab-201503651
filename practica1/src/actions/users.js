import axios from 'axios';

import {GET_USER,POST_USER,DELETE_USER,PATCH_USER} from './types';

export const tokenConfig = () => {
 
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':"Bearer c9ab8c3a602403db79638ff90f795fb6d483d9ff62659e20a37295c7cbdb7f01"
      },
    };


    return config;
};

// GET USER
export const getUser = (id) => (dispatch) => {
    axios.get(`https://gorest.co.in/public-api/users/${id}/`,tokenConfig())
        .then(res => {
            if(res.data.code == 200){
                dispatch({
                    type: GET_USER,
                    payload: res.data.data
                });
            }else{
                dispatch({
                    type: GET_USER,
                    payload: {
                        created_at: "No existe",
                        email: "No existe",
                        gender: "No existe",
                        id: 0,
                        name: "No existe",
                        status: "No existe",
                        updated_at: "No existe"
                    }
                }); 
            }           
        }).catch(err => console.log(err));
};


// delete new user
export const deleteUser = (id) => (dispatch) => {
    axios.delete(`https://gorest.co.in/public-api/users/${id}/`,tokenConfig())
        .then(res => {
            console.log(res.data);
            dispatch({
                type: DELETE_USER,
                payload: {
                    created_at: "No existe",
                    email: "No existe",
                    gender: "No existe",
                    id: 0,
                    name: "No existe",
                    status: "No existe",
                    updated_at: "No existe"
                }
            });          
        }).catch(err => console.log(err));
};

// add new user

export const postUser = user =>  (dispatch) => {
    axios.post('https://gorest.co.in/public-api/users', user ,tokenConfig())
        .then(res => {
            console.log(res.data)
            sessionStorage.setItem("lastUser",JSON.stringify(res.data))  
            dispatch({
                type: POST_USER,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const updateUser = (user,id) =>  (dispatch) => {
    axios.patch(`https://gorest.co.in/public-api/users/${id}/`, user ,tokenConfig())
        .then(res => {
            console.log(res.data)
            sessionStorage.setItem("lastUser",JSON.stringify(res.data))  
            dispatch({
                type: PATCH_USER,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
