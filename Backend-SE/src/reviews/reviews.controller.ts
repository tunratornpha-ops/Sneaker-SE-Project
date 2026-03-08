import { Controller, Post, Body } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { Review } from "./review.entity";

@Controller("reviews")
export class ReviewsController {

  constructor(private reviewsService: ReviewsService) {}

  @Post()
  createReview(@Body() reviewData: Partial<Review>) {
    return this.reviewsService.create(reviewData);
  }

}