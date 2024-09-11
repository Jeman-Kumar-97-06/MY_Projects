import {useWorkoutContext} from '../hooks/useWorkoutContext';

const WorkoutDetails = ({wrkt}) => {
    const {dispatch} = useWorkoutContext();
    const handleClick = async () => {
        const response = await fetch('/api/workouts/'+wrkt._id,{method:"DELETE"});
        const json     = response.json();
        if(response.ok){

        }
    }
    return (
        <div className="workout-details">
            <h4>{wrkt.title}</h4>
            <p><strong>Load (kg) : </strong>{wrkt.load}</p>
            <p><strong>Reps :</strong>{wrkt.reps}</p>
            <p>{wrkt.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails;