import { Repository } from "typeorm"
import Comment from "../../entities/comments.entity"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import Sale from "../../entities/sales.entity"
import { AppError } from "../../error"
import { returnCreateCommentResponseSchema } from "../../schemas/commentsSchema.schema"
import { TCommentRequest, TCreateCommentResponse } from "../../interfaces/comments.interface"

export const createCommentService = async (data: TCommentRequest): Promise<TCreateCommentResponse> => {

    const saleId = data.sale_id
    const userId = data.user_id

    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const salesRepository: Repository<Sale> = AppDataSource.getRepository(Sale)
    
    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if(!user) {
        throw new AppError("User not found!", 404)
    }

    const sale = await salesRepository.findOne({
        where: {
            id: saleId
        }
    })

    if(!sale) {
        throw new AppError("Sale not found!", 404)
    }

    const newComment = commentRepository.create({
        text: data.text,
        sale: sale,
        user: user
    })

    const newCommentWithRelations = await commentRepository.save(newComment)

    const resp = returnCreateCommentResponseSchema.parse(newCommentWithRelations)

    return resp

}