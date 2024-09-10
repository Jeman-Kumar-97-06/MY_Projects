const WorkoutDetails = ({wrkt}) => {
    return (
        <div className="workout-details">
            <h4>{wrkt.title}</h4>
            <p><strong>Load (kg) : </strong>{wrkt.load}</p>
            <p><string>Reps :</string>{wrkt.reps}</p>
            <p>{wrkt.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails;