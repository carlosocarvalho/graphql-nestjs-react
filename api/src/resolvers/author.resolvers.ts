
import { Resolver, Query, Args, Mutation, Int, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions'

import AuthorEntity from 'src/db/models/author.entity';
import RepoService from 'src/modules/repo.service';
import { AuthorInput, AuthorDeleteInput } from './input/author.input';


const pubSub = new PubSub();
const CREATED = 'authorCreated'
const DELETED = 'authorDeleted'

@Resolver(of => AuthorEntity)
export default class AuthorResolver {

    constructor(private readonly repository: RepoService) { }


    @Query(returns => [AuthorEntity])
    public async authors(): Promise<AuthorEntity[]> {
        return this.repository.AuthorRepository.find();
    }
    @Query(returns => AuthorEntity)
    async author(@Args('id', { type: () => Int }) id: number) {
        return this.repository.AuthorRepository.findOne(id);
    }

    @Mutation(() => AuthorEntity, { nullable: true })
    public async deleteAuthor(@Args('data') input: AuthorDeleteInput):
        Promise<AuthorEntity | any> {
        const deleted = this.repository.AuthorRepository.findOne(input.id);
        if (!deleted) return null
        const copy = deleted
        this.repository.AuthorRepository.delete(input.id)
        pubSub.publish(DELETED, { [DELETED]: copy })
        return copy
    }

    @Mutation(() => AuthorEntity)
    public async createAuthor(@Args('data') input: AuthorInput):
        Promise<AuthorEntity> {
        const author = this.repository.AuthorRepository.create({
            name:
                input.name
        });
        const saved = await this.repository.AuthorRepository.save(author)

        pubSub.publish(CREATED, { [CREATED]: saved })
        return saved
    }


    @Subscription(() => AuthorEntity)
    authorCreated() {
        return pubSub.asyncIterator(CREATED)
    }

    @Subscription(() => AuthorEntity)
    authorDeleted() {
        return pubSub.asyncIterator(DELETED)
    }
}