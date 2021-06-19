const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction, 
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

// setup GET(all) route - /api/thoughts
router.route('/')
    .get(getAllThoughts);

// setup POST (thought) route - /api/thoughts/<userId>
router.route('/:userId')
    .post(addThought);

// setup GET(one), PUT (thought) routes - /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

// setup PUT (add reaction, PUT-thought), DELETE (thought) routes - /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId') 
    .put(addReaction)
    .delete(deleteThought);

// setup DELETE (reaction) route - /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;