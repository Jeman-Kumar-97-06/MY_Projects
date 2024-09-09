import { useEffect,useState } from "react";

const Home = () => {

    const [workouts,setWorkouts] = useState(null);
    // "proxy":"http://localhost:4000",
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const resp = await fetch('/api/workouts/');
            const json = await resp.json();
            if (resp.ok){
                setWorkouts(json);
                console.log(workouts)
            }
        }
        fetchWorkouts()
    },[]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((w)=>(
                    <h1>{w.title}</h1>
                ))}
            </div>
        </div>
    )
}

export default Home;