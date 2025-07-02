import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DeleteBookService } from './books/delete-book.service';
import { EditBookService } from './books/edit-book.service';
import { CreateBookService } from './books/create-book.service';
import { GetBookByIdService } from './books/get-book-by-id.service';
import { DeleteBookController } from './books/delete-book.controller';
import { EditBookController } from './books/edit-book.controller';
import { CreateBookController } from './books/create-book.controller';
import { GetBookByIdController } from './books/get-book-by-id.controller';
import { BookRepository } from './books/books.repository';
import { FetchRecentBooksService } from './books/fetch-recent-books.service';
import { FetchRecentBooksController } from './books/fetch-recent-books.controller';

@Module({
  imports: [],
  controllers: [DeleteBookController, EditBookController, CreateBookController, GetBookByIdController, FetchRecentBooksController],
  providers: [BookRepository ,PrismaService, DeleteBookService, EditBookService, CreateBookService, GetBookByIdService, FetchRecentBooksService],
})
export class AppModule {}
