import { BadRequestException, ConflictException, Injectable } from "@nestjs/common"; 
import { BookRepository } from "./books.repository";

interface CreateBookServiceRequest {
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;       
}

@Injectable()
export class CreateBookService {
  constructor(private booksRepository: BookRepository) {}

  async execute({
    title,
    author,
    publicationYear,
    isbn,
  }: CreateBookServiceRequest): Promise<void> {
    const productWithSameName = await this.booksRepository.findByTitle(title);

    if (productWithSameName) {
      throw new ConflictException("Book with same name already exists.");
    }

    await this.booksRepository.create({
    title,
    author,
    publicationYear,
    isbn,
    });
  }
}