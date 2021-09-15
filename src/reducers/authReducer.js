import { types } from "../types/types";

/* 
    {
        uid:alskudhasd76as98d69876;
        name: 'Eliseo'
    }

*/

/* const initialState = {
    uid: 123123,
    name: 'Eliseo',
    dir: {
        b: 12
    }

} */

export const authReducer = ( state = {}, action ) => {
    
    switch ( action.types ) {
        
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
    
        case types.logout:
            return {}
            
            
    
        default:
            return state;
    }
}
