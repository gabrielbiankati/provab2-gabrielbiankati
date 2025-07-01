import { Controller, Get, HttpCode, Param } from "@nestjs/common";
import { GetBookByIdService } from "./get-book-by-id.service";

@Controller('/books/:id')
export class GetBookByIdController {
  constructor(private getBookById: GetBookByIdService) {}

  @Get()
  @HttpCode(200)
  async handle(@Param("id") id: string) {
    const book = await this.getBookById.execute({
      id,
    });

    return {
      book
    };
  }
}