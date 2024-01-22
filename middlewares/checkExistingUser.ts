import { Request, Response, NextFunction } from "express"
import { userModel } from "../models/users.model.db"
import { createJsonRes } from "../helpers/createResponse"
import { CustomRequest } from "../interfaces/interface"

export const checkUserExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body

        const registeredUser = await userModel.findOne({ email: email })
        if (registeredUser) return res.status(200).json(createJsonRes('user already exists'))
        next()
    } catch (e:any) {
        console.log(e)
        return res.status(500).json(createJsonRes(e.message))
    }
}