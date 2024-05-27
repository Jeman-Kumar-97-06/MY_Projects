import {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const books = [
    {
        "name"   : "Book1",
        "author" : "author1",
        "id"     : 1
    },
    {
        "name"   : "Book2",
        "author" : "author2",
        "id"     : 2
    },
    {
        "name"   : "Book3",
        "author" : "author3",
        "id"     : 3
    }
]

class BookList extends Component{
    render () {
        return (
            <ThemeContext.Consumer>
                {
                    context=>{
                        const {isLightTheme,light,dark} = context;
                        const theme = isLightTheme ? light : dark;
                        return (
                            <div className="bookL" style={{background :theme.syntax}}>
                                {
                                    books.map(bok=>(
                                    <div className="bookeach" key={bok.id} style={{background:theme.ui,color:theme.syntax}}>
                                        <h4>{bok.name}</h4>
                                        <p>{bok.author}</p>
                                        <button>Delete Book</button>
                                    </div>
                                                    ))
                                }
                            </div>
                               )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;