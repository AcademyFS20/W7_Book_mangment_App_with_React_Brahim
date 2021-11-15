import React from 'react';
import Button from './Button';
function Book(props) {
    return (
        <>
            <td>{props.id}</td>
            <td>{props.bookTitle}</td>
            <td>{props.authorName}</td>
            <td>{props.categories}</td>
            <td>{props.nbPages}</td>
    
        </>
    )
}

export default Book
