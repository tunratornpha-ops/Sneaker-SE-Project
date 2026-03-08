import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from './products/products.module';
import { OrdersModule } from "./orders/orders.module";
import { ReviewsModule } from './reviews/reviews.module';
import { AddressesModule } from './addresses/addresses.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'mongodb',              // ใช้ MongoDB
      host: process.env.DB_HOST || 'localhost',  // โฮสต์จาก .env
      port: parseInt(process.env.DB_PORT || '27017', 10),  // พอร์ตจาก .env
      database: process.env.DB_NAME ?? 'SE', // ชื่อฐานข้อมูล      
      autoLoadEntities: true,        // โหลด entity อัตโนมัติ
      synchronize: false,           // ❌ ไม่ sync schema อัตโนมัติ (ปลอดภัยกว่า)

    }),
    AuthModule,
    ProductsModule,
    OrdersModule,
    ReviewsModule,
    AddressesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
