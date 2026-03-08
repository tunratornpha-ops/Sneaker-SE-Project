import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { User } from "../user/user.entity";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: MongoRepository<User>
  ) {}

  async register(data:any){

    const user = this.userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      createdAt: new Date()
    });

    await this.userRepository.save(user);

    return {
      message:"Register success"
    };

  }

  async login(data:any){

    const user = await this.userRepository.findOne({
      where:{
        email:data.email
      }
    });

    if(!user){
      return { message:"User not found" };
    }

    if(user.password !== data.password){
      return { message:"Wrong password" };
    }

    return {
      message:"Login success",
      user
    };

  }

}