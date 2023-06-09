import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import React, { Component } from 'react';

const View = ({books , deletBook}) => {
    
    return(
         books.map((book)=>
           <tr key={book.number}>
            <td>{book.number}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className="delete-btn">
            <Icon icon={trash} onClick={()=> deletBook(book.number) } />
            </td>
            </tr> 
    )
      
    )    
   
}

export default View;