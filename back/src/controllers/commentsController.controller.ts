import { Request, Response } from "express";
import { createCommentService } from "../services/comments/createCommentService.service";

export const createCommentsController = async (req: Request, res: Response): Promise<Response> => {

    const data = req.body

    const newComment = await createCommentService(data)

    return res.status(201).json(newComment)

}