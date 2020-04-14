import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Book1586236364384 implements MigrationInterface {

    private tableOptions = new Table({
        name: 'books',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isUnique: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'title',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'author_id',
                type: 'INTEGER',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            }],
    })
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tableOptions)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable(this.tableOptions)
    }

}
