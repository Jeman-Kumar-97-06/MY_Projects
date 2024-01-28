import Home from './Home';
import './App.css';
import {useState,useEffect} from 'react';
import BlogList from './BlogList';

function App() {
  //set or change blogs
  const [blogs,setBlogs] = useState(null)
  //set or change error
  const [error,setError] = useState(null);
  //set or change loading...
  const [isPending,setIsPending] = useState(true);
  //function to delete blogs
    const handleD = (id) => {
      const newBlogs = blogs.filter(blog=> blog.id!== id);
      setBlogs(newBlogs);
    }

  //useEffect to pull data from '../data/db.json'
  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:1234/blogs',{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
        "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"

      }).then(res=>{
            if(!res.ok){
              throw Error("Custom Error By Doom_Guy_26 : Could'nt fetch data from db.json")
            };
            return res.json();
          }).then(data=>{
            setBlogs(data);
            setIsPending(false);
            setError(null);
          }).catch(err=>{
            setError(err.message);
            setIsPending(false);
          })
    },1000);
  },[])

  return (
    <div className="App">
      <Home/>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} handleD={handleD}/>}
    </div>
  );
}

export default App;
