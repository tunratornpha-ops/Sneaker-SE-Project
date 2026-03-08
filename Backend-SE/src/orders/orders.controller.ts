import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) { }

    // สร้าง order
    @Post()
    create(@Body() orderData: any) {
        return this.ordersService.create(orderData);
    }

    // ดู order ของ user
    @Get("user/:userId")
    findByUser(@Param("userId") userId: string) {
        return this.ordersService.findByUser(userId);
    }

    @Get("completed/:userId")
    getCompletedOrders(@Param("userId") userId: string) {
        return this.ordersService.findCompletedOrders(userId);
    }

}