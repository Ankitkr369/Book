import * as types from'./actionTypes'

const initialState={
    books:[],
    isLoading:false,
    isError:false
}

const reducer =(oldState=initialState,action)=>{
    const{type,payload}=action;
    switch(type){

        case types.GET_BOOK_REQUEST:
            return{...oldState,isLoading:true};
            case types.GET_BOOK_SUCCESS:
                return{...oldState,isLoading:false,books:payload};
                case types.GET_BOOK_ERROR:
                    return{...oldState,isLoading:false,
                    isError:true};
                    default:
                        return oldState;

    }
}
export{reducer}