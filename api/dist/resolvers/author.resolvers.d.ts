import AuthorEntity from 'src/db/models/author.entity';
import RepoService from 'src/modules/repo.service';
import AuthorInput from './input/author.input';
export default class AuthorResolver {
    private readonly repository;
    constructor(repository: RepoService);
    authors(): Promise<AuthorEntity[]>;
    author(id: number): Promise<AuthorEntity>;
    createAuthor(input: AuthorInput): Promise<AuthorEntity>;
}
