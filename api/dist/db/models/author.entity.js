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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const book_entity_1 = require("./book.entity");
let AuthorEntity = class AuthorEntity {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], AuthorEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AuthorEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => book_entity_1.default, book => book.authorConnection),
    __metadata("design:type", Promise)
], AuthorEntity.prototype, "bookConnection", void 0);
AuthorEntity = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({
        name: 'authors'
    })
], AuthorEntity);
exports.default = AuthorEntity;
//# sourceMappingURL=author.entity.js.map