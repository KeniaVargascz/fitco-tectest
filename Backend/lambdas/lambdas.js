const getUsers = require("./get_users");
const getPublications = require("./get_publications");
const getUserByUsername = require("./get_user_by_username");
const postPublish = require("./post_publish"); 
const putReactionUser = require('./put_reaction_user'); 

module.exports = {
    getUsers,
    getPublications,
    getUserByUsername,
    postPublish,
    putReactionUser
  };
  