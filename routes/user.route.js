import express from "express";
import {celebrate} from "celebrate";
import {SignupBodySchema, LoginBodySchema} from "../schema/index.js";
import {
    saveUser,
    loginUser,
    viewProfile,
    getUsersController,
    updateUserController,
    deleteUserController,
} from "../controllers/index.js";

import {authenticate} from "../middleware/auth.middleware.js";
import {User} from "../models/index.js";

const userRouter = express.Router();

userRouter.post("/", celebrate({body: SignupBodySchema}), saveUser);
userRouter.post("/login", celebrate({body: LoginBodySchema}), loginUser);
userRouter.get("/me", authenticate, viewProfile);
userRouter.get("/", getUsersController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

userRouter.get("/test", (req, res) => {
    res.send("test");
});
userRouter.get("/test/:id", (req, res) => {
    res.send(req.params.id);
});
userRouter.post("/test", (req, res) => {
    const data = new User({
        name: req.body.name,
        age: req.body.age
    });

    try {
        data.save().then((data) => {res.send(data).status(200);})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

});


export default userRouter;
