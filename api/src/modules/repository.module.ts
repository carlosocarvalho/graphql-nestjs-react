import { Module, Global } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import AuthorEntity from "src/db/models/author.entity";
import RepoService from "./repo.service";
import Book from "src/db/models/book.entity";



@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([
            AuthorEntity,
            Book
        ])
    ],
    providers: [
        RepoService
    ],
    exports: [RepoService]
})
export default class RepositoryModule {

}