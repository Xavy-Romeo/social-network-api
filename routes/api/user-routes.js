const router = require('express').Router();

// require user controller and deconstruct methods
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller');

// setup GET(all) and POST routes - /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// setup GET(one), PUT, and DELETE routes - /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// setup PUT (add friend), DELETE(friend) routes - /api/users/<userId>/<friendId>
router 
    .route('/:userId/:friendId')
    .put(addFriend)
    .delete(deleteFriend);

module.exports = router;