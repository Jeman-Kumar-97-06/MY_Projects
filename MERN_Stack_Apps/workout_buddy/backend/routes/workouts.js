const exp                                    = require('express');
const {getWorkouts,getWorkout,createWorkout} = require('../controllers/workoutController')
const router                                 = exp.Router();

//ROUTE Handler Functions :--
//GET all workouts
router.get('/',getWorkouts) 

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:"DELETE a workout with id"})
})

//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a workout with id"})
})

module.exports = router;