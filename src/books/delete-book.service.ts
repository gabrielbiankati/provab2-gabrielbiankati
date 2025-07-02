import { Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "./books.repository";

interface DeleteBookServiceRequest {
  id: string;
}

@Injectable()
export class DeleteBookService {
  constructor(private booksRepository: BookRepository) { }

  async execute({id,}: DeleteBookServiceRequest): Promise<void> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new NotFoundException("Book not found");
    }

    await this.booksRepository.delete(book);
  }
}