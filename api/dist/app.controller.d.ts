import RepoService from './modules/repo.service';
export declare class AppController {
    private readonly repository;
    constructor(repository: RepoService);
    getHello(): Promise<string>;
}
