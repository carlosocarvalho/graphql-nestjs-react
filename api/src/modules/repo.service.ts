import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Author from "../db/models/author.entity";
import { Repository } from "typeorm";
import Book from "src/db/models/book.entity";


@Injectable()
export default class RepoService {

    public constructor(
        @InjectRepository(Author) public readonly AuthorRepository: Repository<Author>,
        @InjectRepository(Book) public readonly BookRepository: Repository<Book>
    ) { }
}