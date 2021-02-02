import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

   // data:blogs --> grab the data but call it blogs in this context
   const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { isPending && <div>Loading... </div> }
            { error && <div>error</div> }
            <BlogList blogs={ blogs } title="All blogs" />
        </div>
     );
}
 
export default Home;