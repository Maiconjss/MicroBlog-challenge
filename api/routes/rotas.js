const express = require("express");

const routes = express.Router();

const { listAll, inserUser } = require("../controllers/user");

const { inserPost, listAllPost } = require("../controllers/posts");

const { inserComments, listAllComments } = require("../controllers/comments");


routes.post("/users", listAll);
routes.post("/insertposts", inserUser);

routes.get("/listAllPosts", listAllPost);
routes.post("/addPost", inserPost);

routes.get("/listAllComments", listAllComments);
routes.post("/addComments", inserComments);


module.exports = routes;
