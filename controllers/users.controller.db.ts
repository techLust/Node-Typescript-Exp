import { userModel } from "../models/users.model.db";
import { Request, Response } from "express";
import { createJsonRes } from "../helpers/createResponse";
import { CustomRequest, User } from "../interfaces/interface";
import { customLogger } from "../utility/logger";

let logger = customLogger()

export const createUser = async (req: Request, res: Response) => {
    logger.info('creating user...')
    try {
        const { name, age, email, isStudent } = req.body

        const userDetails: any = await userModel.create({ name, age, email, isStudent })
        logger.info('user created successfull')
        return res.status(201).json(createJsonRes('success', 'user created successfull', userDetails))
    } catch (e: any) {
        logger.error(e.message)
        return res.status(500).json(createJsonRes('Failed to create user'))
    }
}

export const getUser = async (req: Request, res: Response) => {
    logger.info('fetching user...')
    try {
        const userDetails: User[] = await userModel.find()
        logger.info('user fetched successfully')
        return res.status(200).json(createJsonRes('users fetched successfull', 'success', userDetails))
    } catch (e: any) {
        logger.error(e.message)
        return res.status(500).json(createJsonRes('Failed to get users'))
    }
}

export const updateUser = async (req: Request, res: Response) => {
    logger.info('updating user...')
    try {
        const { id } = req.params
        const body = req.body

        let userDetails: User | null = await userModel.findById(id)

        logger.info('checking if user exists...')
        if (!userDetails) {
            logger.error('user already exists')
            return res.status(404).json(createJsonRes('user not found'))
        }
        logger.info('validating inputs...')
        if (userDetails !== null) {
            for (let key in body) {
                if (!(key in userDetails)) {
                    logger.error('field does not exist in user')
                    return res.status(400).json(createJsonRes('field does not exists'))
                }
            }
        }
        const updatedUserData = await userModel.findByIdAndUpdate(id, body, { new: true })
        logger.info('user updated :)')
        return res.status(202).json(createJsonRes('user updated successfull', 'accepted', updatedUserData))
    } catch (e: any) {
        logger.error(e.message)
        return res.status(500).json(createJsonRes('Failed to update users details'))
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const userDetails: User | null = await userModel.findByIdAndDelete(id)
        logger.info('user deleted successfullI')
        return res.status(202).json(createJsonRes('user delete successfull', 'accepted', userDetails))
    } catch (e: any) {
        logger.error(e.message)
        return res.status(500).json(createJsonRes('failed to delete user'))
    }
}