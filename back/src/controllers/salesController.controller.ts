import { Response, Request } from "express";


const createSalesController = async (req: Request, res: Response) => {
    // const newSales= await createSalesService(req.body);
  
    return res.status(201).json('newSales');
  };
  