import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "./books.repository";


export interface Book {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;   
  createdAt: string | Date | undefined;
  updatedAt: string | Date | null | undefined;
}

interface GetBookByIdServiceRequest {
  id: string;
}

type GetBookByIdServiceResponse = {
  book: Book;
}

@Injectable()
export class GetBookByIdService {
  constructor(private booksRepository: BookRepository) {}

  async execute({id,}: GetBookByIdServiceRequest): Promise<GetBookByIdServiceResponse> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new NotFoundException("Book not found");
    }

    const newBook: Book = {
      id: book.id?.toString() || "",
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
      isbn: book.isbn,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    };

    return {
      book: newBook
    };
  }
}