
import { Resolver, Query, Args, Mutation, Parent, ResolveField } from '@nestjs/graphql';


import Book from 'src/db/models/book.entity';
import RepoService from 'src/modules/repo.service';
import { AuthorInput } from './input/author.input';
import { BookInput, BookDeleteInput } from './input/book.input';
import AuthorEntity from 'src/db/models/author.entity';

@Resolver(() => Book)
export default class BookResolver {

    constructor(private readonly repository: RepoService) { }

    @Query(() => [Book])
    public async books(): Promise<Book[]> {
        return this.repository.BookRepository.find();
    }

    @Mutation(() => Book)
    public async createBook(@Args('data') input: BookInput):
        Promise<Book> {
        const book = this.repository.BookRepository.create({
            title: input.title,
            authorId: input.authorId

        });
        return this.repository.BookRepository.save(book);
    }


    @Mutation(() => Book, { nullable: true })
    public async deleteBook(@Args('data') input: BookDeleteInput):
        Promise<Book | any> {
        const book = this.repository.BookRepository.findOne(input.id);
        if (!book) return null
        const copy = book
        this.repository.BookRepository.delete(input.id)
        return copy
    }

    @ResolveField('author', returns => AuthorEntity)
    public async author(@Parent() parent): Promise<AuthorEntity> {
        return this.repository.AuthorRepository.findOne(parent.authorId);
    }
}