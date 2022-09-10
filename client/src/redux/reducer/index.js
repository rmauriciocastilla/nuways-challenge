import { GET_CONTACTS } from "../actions/variables";
const initialState = {
    contacts: []
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload.reverse()
            };
        default:
            return {...state};
    }
}

export default rootReducer;