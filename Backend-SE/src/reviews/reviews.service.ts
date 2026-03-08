import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Review } from "./review.entity";

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private reviewRepository: MongoRepository<Review>
      ) {}
    
      async create(reviewData: Partial<Review>) {
    
        const review = {
          ...reviewData,
          createdAt: new Date()
        };
    
        return this.reviewRepository.save(review);
    
      }
    
}
