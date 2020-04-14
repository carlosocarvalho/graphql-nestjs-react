"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const author_entity_1 = require("src/db/models/author.entity");
const repo_service_1 = require("src/modules/repo.service");
const author_input_1 = require("./input/author.input");
let AuthorResolver = class AuthorResolver {
    constructor(repository) {
        this.repository = repository;
    }
    authors() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.AuthorRepository.find();
        });
    }
    author(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.AuthorRepository.findOne(id);
        });
    }
    createAuthor(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = this.repository.AuthorRepository.create({
                name: input.name
            });
            return this.repository.AuthorRepository.save(author);
        });
    }
};
__decorate([
    graphql_1.Query(returns => [author_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    graphql_1.Query(returns => author_entity_1.default),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    graphql_1.Mutation(() => author_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_input_1.default]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
AuthorResolver = __decorate([
    graphql_1.Resolver(of => author_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], AuthorResolver);
exports.default = AuthorResolver;
//# sourceMappingURL=author.resolvers.js.map