import { Controller, Delete, HttpCode, Param } from "@nestjs/common";
import { DeleteBookService, } from "./delete-book.service"; 

@Controller('/books/:id')
export class DeleteBookController {
  constructor(private deleteBook: DeleteBookService) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param("id") id: string) {
    await this.deleteBook.execute({
      id,
    });
  }
}