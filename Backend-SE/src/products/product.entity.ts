import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("products")
export class Product {

  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  color: string[];

  @Column()
  size: string[];

}