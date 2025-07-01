import { Injectable } from "@nestjs/common";
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

type FetchRecentBooksServiceResponse = {
  books: Book[];
}

@Injectable()
export class FetchRecentBooksService {
  constructor(private booksRespository: BookRepository) {}

  async execute(): Promise<FetchRecentBooksServiceResponse> {
    const books = await this.booksRespository.findManyRecent();

    const newBooks: Book[] = [];

    if (!books) {
      throw new Error("Book not found");
    }

    for (const book of books) {
      newBooks.push({
        id: book.id?.toString() || "",
        title: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        isbn: book.isbn,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
      });
    }

    return {
      books: newBooks
    };
  }
}