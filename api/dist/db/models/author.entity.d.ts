import Book from './book.entity';
export default class AuthorEntity {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bookConnection: Promise<Book[]>;
}
