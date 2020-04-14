
import AuthorEntity from 'src/db/models/author.entity';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthorInput implements Partial<AuthorEntity> {
    @Field()
    readonly name: string;
}



@InputType()
export class AuthorDeleteInput {
    @Field()
    readonly id: number;

}