import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Order {

  @ObjectIdColumn()
  _id: string;

  @Column()
  userId: string;

  @Column()
  items: any[];

  @Column()
  total: number;

  @Column()
  address: any;

  @Column()
  status: string;

  @Column()
  createdAt: Date;

}