const exp    = require('express');
const router = exp.Router();

//GET all workouts
router.get('/',(req,res)=>{
    res.json({mssg: 'GET all workouts'});
}) 

//GET a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'GET workout with id'})
})

//POST a new workout
router.post('/',(req,res)=>{
    res.json({mssg:"POST a new workout"})
})

//DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:"DELETE a workout with id"})
})

//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a workout with id"})
})

module.exports = router;