import useFetch from './customUseFetchHook';

import BlogList from './BlogList';
const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:1234/blogs');
    return (
        <div className="home">
            <h1>React Blogger</h1>
            <nav className='nav-top'>      
                {error && <div>{error}</div>}
                {isPending && <div>Loading ...</div>}
                {blogs && <BlogList blogs={blogs} />}
            </nav>
        </div>
    )
}
export default Home;