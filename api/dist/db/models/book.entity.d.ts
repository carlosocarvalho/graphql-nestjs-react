import Author from './author.entity';
export default class Book {
    id: number;
    title: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    author: Author;
    authorConnection: Promise<Author>;
}
