import axios from 'axios';
import {Dispatch} from 'redux';

import {USER} from './interfaz';
import {Datatypes} from './Data';

export interface GET_USERS{
    type:Datatypes.GET_USER,
    payload:USER[]

}

const URL:string='http://localhost:3001/api/user';

export function getUsers(){

    return async function(dispatch:Dispatch){
        try{
            const respuesta=await axios.get<USER[]>(URL);
            // console.log('la respuesta es: ',respuesta);
            dispatch<GET_USERS>({
                type: Datatypes.GET_USER,
                payload:respuesta.data,
            });
        }catch(error){
            console.log('El error es: ',error);
        }
        
    }
};

