import {USER} from '../actions/interfaz';
import {GET_USERS} from '../actions/index';
import {Datatypes} from '../actions/Data';

export const userReducer=(state:USER[]=[], action:GET_USERS,)=>{

    switch(action.type){
        case Datatypes.GET_USER:
            return action.payload;
            
        default:
            return state;
    }

}