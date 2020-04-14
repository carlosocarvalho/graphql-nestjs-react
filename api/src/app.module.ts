import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepositoryModule from './modules/repository.module';
import { GraphQLModule } from '@nestjs/graphql';
import AuthorResolver from './resolvers/author.resolvers'
import BookResolver from './resolvers/book.resolvers';

const graphQLImports = [
  AuthorResolver,
  BookResolver
]

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepositoryModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
