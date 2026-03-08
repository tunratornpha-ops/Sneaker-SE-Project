import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class Address {

  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address1: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postcode: string;

  @Column()
  createdAt: Date;

}