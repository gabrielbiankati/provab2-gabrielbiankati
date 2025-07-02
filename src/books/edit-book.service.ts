import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "./books.repository";

export interface EditBookServiceRequest {
  id: string;
  title?: string;
  author?: string;
  publicationYear?: number;
  isbn?: string;   
}

@Injectable()
export class EditBookService {
  constructor(private booksRepository: BookRepository) {}

  async execute({
      id,
      title,
      author,
      publicationYear,
      isbn,
  }: EditBookServiceRequest): Promise<void> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new NotFoundException("Book not found");
    }

    book.title = title!;
    book.author = author!;
    book.publicationYear = publicationYear!;
    book.isbn = isbn!;

    await this.booksRepository.save(book);
  }
}
