import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';

import { getBooks } from '../Redux/action';
import BookCard from './BookCard';

export const BookList = () => {
 
    const books=useSelector(store=>store.books);

    const dispatch=useDispatch()
    useEffect(()=>{
        if(books.length===0){
            dispatch(getBooks())
        }
    },[books.length,dispatch])
 
    return (
    <>
        {books.length>0&&
        books.map((SingleBook)=>{
            return <BookCardWrapper key={SingleBook.id}>
                <BookCard bookData={SingleBook}/>
            </BookCardWrapper>
        })}
    </>
  )
}
const BookCardWrapper =styled.div`
width:300px;`;
