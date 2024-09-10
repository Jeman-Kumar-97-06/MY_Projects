import { useEffect,useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

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
                    <WorkoutDetails key={w._id} wrkt={w}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;