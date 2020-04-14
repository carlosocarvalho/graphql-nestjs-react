import AuthorEntity from 'src/db/models/author.entity';
export default class AuthorInput implements Partial<AuthorEntity> {
    readonly name: string;
}
