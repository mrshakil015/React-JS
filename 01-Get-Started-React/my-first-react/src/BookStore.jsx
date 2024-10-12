import './book.css'
export default function BookStore({book}){
    return (
        <div className='book'>
            <h4>Books: {book.name}</h4>
            <p>Price: {book.price}</p>
        </div>
    )
}