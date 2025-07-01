import { Controller, Get, HttpCode } from "@nestjs/common";
import { FetchRecentBooksService } from "./fetch-recent-books.service";

@Controller('/products')
export class FetchRecentBooksController {
  constructor(private fetchRecentBooks: FetchRecentBooksService) {}

  @Get()
  @HttpCode(200)
  async handle() {
    const books = await this.fetchRecentBooks.execute();

    return {
      books
    };
  }
}