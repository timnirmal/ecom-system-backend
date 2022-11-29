import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = (data) =>
    User.create(data)
        .then((user) => {
            return Promise.resolve(user);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });

export const loginUser = (email) =>
    User.findOne({ email })
        .then((user) => {
            return Promise.resolve(user);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });

export const getUser = (data) =>
    User.findOne(data)
        .select("-password")
        .then((user) => {
            return Promise.resolve(user);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });

export const getUsers = () =>
    User.find()
        .then((users) => {
            return Promise.resolve(users);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });

export const updateUser = (userId, data) =>
    User.findByIdAndUpdate(userId, data, { new: true })
        .then((user) => {
            return Promise.resolve(user);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });

export const deleteUser = (userId) =>
    User.findByIdAndDelete(userId)
        .then((user) => {
            return Promise.resolve(user);
        })
        .catch(() => {
            throw new AppError("Internal server error.", 500);
        });


// Create "user.model.js" file in "models" folder.
// From model write the schema and export the model in "user.model.js" file.
// From "user.repository.js" write the basic functions to interact with the database.
// From "user.service.js" write functions to wrap the repository functions and return the response.
// From "user.controller.js" write functions to bussiness logic and return the response.