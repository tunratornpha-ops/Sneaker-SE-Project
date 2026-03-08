import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Address } from "./address.entity";

@Injectable()
export class AddressesService {

  constructor(
    @InjectRepository(Address)
    private addressRepository: MongoRepository<Address>
  ) {}

  async create(addressData: Partial<Address>) {

    const address = {
      ...addressData,
      createdAt: new Date()
    };

    return this.addressRepository.save(address);

  }

  async findByUser(userId: string) {
    return this.addressRepository.find({
      where: { userId }
    });
  }

  async remove(id: string) {
    return this.addressRepository.delete(id);
  }

}