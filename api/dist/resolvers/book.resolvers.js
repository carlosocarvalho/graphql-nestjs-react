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
const book_entity_1 = require("src/db/models/book.entity");
const repo_service_1 = require("src/modules/repo.service");
const book_input_1 = require("./input/book.input");
let BookResolver = class BookResolver {
    constructor(repository) {
        this.repository = repository;
    }
    books() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.BookRepository.find();
        });
    }
    createBook(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = this.repository.BookRepository.create({
                title: input.title,
                authorId: input.authorId
            });
            return this.repository.BookRepository.save(book);
        });
    }
    author(parent) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.AuthorRepository.findOne(parent.authorId);
        });
    }
};
__decorate([
    graphql_1.Query(() => [book_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    graphql_1.Mutation(() => book_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_input_1.default]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "author", null);
BookResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [repo_service_1.default])
], BookResolver);
exports.default = BookResolver;
//# sourceMappingURL=book.resolvers.js.map