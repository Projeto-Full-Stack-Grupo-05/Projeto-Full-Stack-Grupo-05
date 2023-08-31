import { Response, Request } from "express";
import {
  TAddress,
  TAddressRequestUpdate,
} from "../interfaces/address.interface";
import updateAddressService from "../services/address/updateAddressService.service";

export const updateAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const addressData: TAddressRequestUpdate = req.body;
  const addressId: string = req.params.id;

  const newAddressData: TAddress = await updateAddressService(
    addressData,
    addressId
  );
  return res.status(200).json(newAddressData);
};
