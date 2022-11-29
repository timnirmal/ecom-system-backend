import {Joi} from "celebrate";

export const SignupBodySchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required()
        .pattern(
            /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        )
});

export const LoginBodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
