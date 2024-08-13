const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({mssg:'GET All workouts'})
})

router.get('/:id',(req,res)=>{
    res.json({mssg:"GET A single workout"});
})

router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body;
    try {
        const new_workout = await Workout.create({title,load,reps});
        res.status(200).json(new_workout);
    } catch(error) {
        res.status(400).json({error:error.message});
    }
    res.json({mssg:"POST A new workout"})
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:"DELETE A workout"})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:"Update a workout"})
})

module.exports = router;