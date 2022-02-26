
export enum Datatypes{
    GET_USER,
    DELETE_USER,
    CREATE_USER,
}

export interface USER{

    name:string,
    lastName:string,
    id:number, 
    
}
export  interface GET_USERS{
    type:Datatypes.GET_USER,
    payload:USER[]

}

export interface DELETE{
    type:Datatypes.DELETE_USER,
    payload:USER[]
}
export interface CREATE_USER{
    type:Datatypes.CREATE_USER,
}

export type Actions=GET_USERS | DELETE | CREATE_USER ;


