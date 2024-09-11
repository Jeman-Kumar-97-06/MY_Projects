import { useEffect} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {

    const {workouts,dispatch} = useWorkoutContext();
    // "proxy":"http://localhost:4000",
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const resp = await fetch('/api/workouts/');
            const json = await resp.json();
            console.log(json);
            if (resp.ok){
                dispatch({type:"SET_WORKOUTS",payload:json});
            }
        }
        fetchWorkouts()
    },[dispatch]);

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