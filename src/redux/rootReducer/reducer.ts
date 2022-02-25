// import {Estado} from '../../interfaces/interface';
import {combineReducers} from 'redux';
import { userReducer } from './users';

import {USER} from '../actions/interfaz';


interface StateUser{
    users:USER[]

}

export const reducers=combineReducers<StateUser>({
    users:userReducer,
})

export type State=ReturnType<typeof reducers>

