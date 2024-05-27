import {useEffect,useState} from 'react';
//import BookDetails from './components/BookDetails';

const Home = () => {
    const [books,setBooks] = useState(null);
    useEffect(()=>{
        const fetchBooks = async () => {
            const response = await fetch('/book_s');
            const json     = await response.json();
            if(response.ok)
            {
                setBooks(json);
            }
        }
        fetchBooks()
    },[]);
    return (
        <div classname='home'>
            <div className='all_books'>
                {books && books.map(bo=>(
                    <div>
                    <h2>{bo.title}</h2>
                    <p>{bo.author}</p>
                    <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;