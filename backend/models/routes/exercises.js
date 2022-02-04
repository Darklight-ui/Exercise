const router = require('express').Router();

let Exercise = require('../exercise.model')

// GET all data
router.route('/').get((req,res) => {
Exercise.find().then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err))
});


// POST data
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    })    
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// GET_DATA_BY_ID
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch((err) => res.send(err))
})

// DELETE_DATA_BY_ID
router.route('/:id').delete((req,res) =>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => { res.json(`Deleted`);})
    .catch((error) => res.status(400).send(error))
})

// UPDATE_DATA 
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date)

        exercise.save()
        .then(() => res.status(400).json("Exercise Updated"))
        .catch((error) => res.status(400).json(error))
    })
})
module.exports = (router)