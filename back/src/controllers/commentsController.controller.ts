import { Request, Response } from "express";
import { TComment } from "../interfaces/comments.interface";
import { createCommentService } from "../services/comments/createCommentService.service";
import updateCommentService from "../services/comments/updateCommentService.service";

export const createCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const newComment = await createCommentService(data);

  return res.status(201).json(newComment);
};

export const updateCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { text } = req.body;
  const commentId: string = req.params.id;

  const updateComment: TComment = await updateCommentService(text, commentId);
  return res.status(200).json(updateComment);
};
