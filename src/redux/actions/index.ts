import axios from 'axios';
import {Dispatch} from 'redux';

const URL:string='https://localhost:3001/user';

export function getUSers(){

    return async function(dispatch:Dispatch){
        const respuesta=await axios(URL);
            dispatch({
                type: 'GET_USERS',
                payload:respuesta
            });
    }
};