import {Estado,Action} from '../../interfaces/interface';

const initialState:Estado = {
    counter:1,

}

const reducer=(state:Estado=initialState,action:Action) =>{
    return state;

}


export default reducer;