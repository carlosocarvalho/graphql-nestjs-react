import Author from "../db/models/author.entity";
import { Repository } from "typeorm";
import Book from "src/db/models/book.entity";
export default class RepoService {
    readonly AuthorRepository: Repository<Author>;
    readonly BookRepository: Repository<Book>;
    constructor(AuthorRepository: Repository<Author>, BookRepository: Repository<Book>);
}
