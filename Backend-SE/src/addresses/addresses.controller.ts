import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { AddressesService } from "./addresses.service";
import { Address } from "./address.entity";
import { Delete } from "@nestjs/common";

@Controller('addresses')
export class AddressesController {

 constructor(private addressesService: AddressesService) {}

 @Post()
 create(@Body() addressData: Partial<Address>) {
   return this.addressesService.create(addressData);
 }

 @Get("user/:userId")
 findByUser(@Param("userId") userId: string) {
   return this.addressesService.findByUser(userId);
 }

 @Delete(":id")
deleteAddress(@Param("id") id: string) {
  return this.addressesService.remove(id);
}

}