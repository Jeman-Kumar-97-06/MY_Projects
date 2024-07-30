import axios from 'axios';

function App() {
  const [prod,setProd] = useState([]);
  const [newp,setNewp] = useState({
    name : "",
    description : "",
    image : ""
  });

  useEffect(()=>{
    axios.get('http://localhost:5000/products').then((resp)=>setProd(resp.data)).catch(err=>{console.log(err)});
  },[]);

  const handleReviewSubmit = (prodId,review) => {
    axios.post()
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
