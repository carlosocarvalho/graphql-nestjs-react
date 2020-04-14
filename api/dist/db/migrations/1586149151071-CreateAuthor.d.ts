import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateAuthor1586149151071 implements MigrationInterface {
    private authorTable;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
