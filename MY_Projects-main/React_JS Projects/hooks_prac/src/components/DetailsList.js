import DetailsEach from './DetailsEach';
import useFetch from '../customHooks/useFetch';
const DetailsList = () => {
    const {data:dets,isPending,error} = useFetch('http://localhost:1234/details')
    
    return (
        <div className='details'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {dets && <DetailsEach des={dets}/>}
        </div>
    )
}
export default DetailsList