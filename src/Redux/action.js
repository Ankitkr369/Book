import axios from 'axios'
import * as types from './actionTypes'

const getBookRequest=()=>{
    return{
        type:types.GET_BOOK_REQUEST
    }
}
const getBookSuccess=(payload)=>{
    return{
        type:types.GET_BOOK_SUCCESS,
        payload
    }
}
const getBookError=()=>{
    return{
        type:types.GET_BOOK_ERROR
    }
}
function getBooks(){
return function(dispatch){
    dispatch(getBookRequest())
return axios.get('http://localhost:8080/books').then(r=>{dispatch(getBookSuccess(r.data))})
.catch(e=>{
    dispatch(getBookError())
})
};
}
export{getBooks}