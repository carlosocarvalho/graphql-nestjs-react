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
const graphql_1 = require("@nestjs/graphql");
const author_input_1 = require("./author.input");
let BookAuthorConnectInput = class BookAuthorConnectInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], BookAuthorConnectInput.prototype, "id", void 0);
BookAuthorConnectInput = __decorate([
    graphql_1.InputType()
], BookAuthorConnectInput);
let BookAuthorInput = class BookAuthorInput {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", BookAuthorConnectInput)
], BookAuthorInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", author_input_1.default)
], BookAuthorInput.prototype, "create", void 0);
BookAuthorInput = __decorate([
    graphql_1.InputType()
], BookAuthorInput);
let BookInput = class BookInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], BookInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], BookInput.prototype, "authorId", void 0);
BookInput = __decorate([
    graphql_1.InputType()
], BookInput);
exports.default = BookInput;
//# sourceMappingURL=book.input.js.map