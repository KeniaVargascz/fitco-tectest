const express = require("express");
const router = express.Router();
const {
    getPublications, 
    getUsers, 
    getUserByUsername,
    postPublish,
    putReactionUser
} = require('../lambdas/lambdas'); 

router.get("/users", getUsers);
router.get("/publication/all/:userId", getPublications);
router.get("/user/:username", getUserByUsername);

router.post("/publish", postPublish); 

router.put("/reaction", putReactionUser); 

module.exports = router;
