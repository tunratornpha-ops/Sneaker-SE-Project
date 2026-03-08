import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Review {

  @ObjectIdColumn()
  _id: string;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  createdAt: Date;

}