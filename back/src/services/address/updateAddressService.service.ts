import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import {
  TAddress,
  TAddressRequestUpdate,
} from "../../interfaces/address.interface";
import Address from "../../entities/address.entity";
import { addressSchema } from "../../schemas/userSchema.schema";

const updateAddressService = async (
  addressData: TAddressRequestUpdate,
  addressId: string
): Promise<TAddress> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address: Address | undefined | null = await addressRepository
    .createQueryBuilder("address")
    .leftJoinAndSelect("address.user", "user")
    .where("address.id = :addressId", { addressId })
    .getOne();

  if (!address) {
    throw new AppError("Address not found");
  }

  const validAddress = address ?? undefined;
  const updatedAddressData: TAddressRequestUpdate = {
    ...validAddress,
    ...addressData,
  };
  Object.assign(validAddress, updatedAddressData);

  await addressRepository.save(validAddress);

  const returnAddress: TAddress = addressSchema.parse(validAddress);
  return returnAddress;
};

export default updateAddressService;
