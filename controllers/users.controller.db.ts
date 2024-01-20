import { userModel } from "../models/users.model.db";
import { Request, Response } from "express";
import { createJsonRes } from "../helpers/createResponse";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, age, isStudent } = req.body
        const userDetails: any = await userModel.create({ name, age, isStudent })
        return res.status(201).json(createJsonRes('user created successfull', 'success', userDetails))
    } catch (e) {
        console.log(e)
        return res.status(500).json(createJsonRes('Failed to create user'))
    }
}