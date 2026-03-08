import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Order } from "./order.entity";

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: MongoRepository<Order>
  ) {}

  // สร้าง order
  async create(orderData: Partial<Order>) {

    const order = {
      ...orderData,
      status: "completed",
      createdAt: new Date()
    };

    return this.orderRepository.save(order);

  }

  // ดู order ของ user
  async findByUser(userId: string) {

    return this.orderRepository.find({
      where: { userId }
    });

  }

  async findCompletedOrders(userId: string) {

    console.log("USER ID:", userId);
  
    const orders = await this.orderRepository.find({
      where: {
        userId: userId,
        status: "completed"
      }
    });
  
    console.log("ORDERS:", orders);
  
    return orders;
  }

}