import {POST_USER, GET_USER, PATCH_USER, DELETE_USER} from '../actions/types';

const initialState = {
    users: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
        case DELETE_USER:
            return{
                ...state, 
                users: action.payload
            };
        case POST_USER:
        case PATCH_USER:
                return{
                    ...state,
                    users: [...state.users, action.payload]
                };
        default:
            return state;
    }
}
