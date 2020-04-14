import Book from 'src/db/models/book.entity';
import RepoService from 'src/modules/repo.service';
import BookInput from './input/book.input';
import AuthorEntity from 'src/db/models/author.entity';
export default class BookResolver {
    private readonly repository;
    constructor(repository: RepoService);
    books(): Promise<Book[]>;
    createBook(input: BookInput): Promise<Book>;
    author(parent: any): Promise<AuthorEntity>;
}
