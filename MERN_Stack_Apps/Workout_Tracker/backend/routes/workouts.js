const express = require('express');
const router  = express.Router();
const {
 getWorkouts,
 getWorkout,
 createWorkout,
 deleteWorkout,
 updateWorkout
}             = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth');

//The Following line makes sure if requests are authorized.
//If authorized ie., if requests sent to server has a valid jwt, then the logged in user's id is attached to request obj.
router.use(requireAuth);

router.get('/',getWorkouts);

router.get('/:id',getWorkout);

router.post('/',createWorkout);

router.delete('/:id',deleteWorkout);

router.patch('/:id',updateWorkout);

module.exports = router;