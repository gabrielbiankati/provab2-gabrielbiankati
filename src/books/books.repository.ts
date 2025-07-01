import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

  async findManyRecent(): Promise<Prisma.BookUncheckedCreateInput[] | null> {
    return await this.prisma.book.findMany();
  }

  async findById(id: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: {
        id,
      }
    });
  }

  async findByTitle(title: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    const book = this.prisma.book.findUnique({
      where: {
        title,
      }
    });

    return book;
  }

    async findByISBN(isbn: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    const book = this.prisma.book.findUnique({
      where: {
        isbn,
      }
    });

    return book;
  }

  async save(data: Prisma.BookUncheckedCreateInput): Promise<void> {
    await Promise.all([
      this.prisma.book.update({
        where: {
          id: data.id?.toString(),
        },
        data,
      }),
    ]);
  }

  async create(data: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.create({
      data: data,
    });
  }

  async delete(book: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id: book.id?.toString(),
      }
    });
  }
}