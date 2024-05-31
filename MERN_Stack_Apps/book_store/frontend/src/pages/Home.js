import {useEffect,useState} from 'react';
import BookDetail from '../components/BookDetail'
const Home = () => {
    const [books,setBooks] = useState(null);
    useEffect(()=>{
        const fetchBooks = async () => {
            const response = await fetch('/book_store/books');
            const json     = await response.json();
            if(response.ok)
                {
                    setBooks(json);
                }
        }
        fetchBooks();
    },[])

    return (
        <div className='home_page'>
            <h3 className='heading_home'>All Books :</h3>
            <div className='books'>
                {books && books.map(bok=>(
                    <BookDetail bok={bok}/>
                ))}
            </div>
        </div>
    )
}
export default Home;