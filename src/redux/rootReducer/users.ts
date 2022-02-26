import {USER} from '../actions/interfaz';
import {Datatypes,Actions} from '../actions/interfaz';


export const userReducer=(state:USER[]=[], action:Actions,)=>{

    switch(action.type){
        case Datatypes.GET_USER:
            return action.payload;

        case Datatypes.DELETE_USER:
            return action.payload;
            
        default:
            return state;
    }

}