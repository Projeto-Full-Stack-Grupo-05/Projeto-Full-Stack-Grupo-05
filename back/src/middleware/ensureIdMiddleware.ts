import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import Sale from '../entities/sales.entity'

const ensureIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>{
    
    const id = req.params.id
  
    const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale)

    const sale = await saleRepository.findOneBy({
        id: id,
    })

    if (!sale) {
        throw new AppError('Sale not found', 404)
    }
    return next()
}

export default ensureIdMiddleware