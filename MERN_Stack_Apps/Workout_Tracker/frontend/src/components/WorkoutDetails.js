import {useWorkoutContext} from '../hooks/useWorkoutContext';

const WorkoutDetails = ({wrkt}) => {
    const {dispatch} = useWorkoutContext();
    const handleClick = async () => {
        const response = await fetch('/api/workouts/'+wrkt._id,{method:"DELETE"});
        const json     = await response.json();
        if(response.ok){
            dispatch({type:"DELETE_WORKOUT",payload:json})
        }
    }
    return (
        <div className="workout-details">
            <h4>{wrkt.title}</h4>
            <p><strong>Load (kg) : </strong>{wrkt.load}</p>
            <p><strong>Reps :</strong>{wrkt.reps}</p>
            <p>{wrkt.createdAt}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default WorkoutDetails;