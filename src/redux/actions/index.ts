import axios from 'axios';
import {Dispatch} from 'redux';

import {USER} from './interfaz';
import {Datatypes,Actions} from './interfaz';


const URL:string='http://localhost:3001/api/user';

interface Post{
    name:string,
    lastName:string,

}


export function getUsers(){

    return async function(dispatch:Dispatch){
        try{
            const respuesta=await axios.get<USER[]>(URL);
            // console.log('la respuesta es: ',respuesta);
            dispatch<Actions>({
                type: Datatypes.GET_USER,
                payload:respuesta.data,
            });
        }catch(error){
            console.log('El error es: ',error);
        }
        
    }
};


export function deleteUser(id:number){
    return async (dispatch:Dispatch)=>{
        console.log('ID: ',typeof id,id)

        try{
            const response=await axios.delete(URL,{data:{
                id:id
            }});
            dispatch<Actions>({
                type: Datatypes.GET_USER,
                payload:response.data,
            });

        }catch(error){
            console.log('El error es: ',error);
        }
    }
}

export function createUser(name:string,lastName:string){
    return async (dispatch: Dispatch)=>{
        try{

            console.log('Action: ',name,lastName);
            await axios.post(URL,{
                data:{
                    name:name,
                    lastName:lastName
                }
            })
            dispatch({
                type:Datatypes.CREATE_USER
            })

        }catch(error){
            console.log('POST_USER: ',error)
        }

    }
}
