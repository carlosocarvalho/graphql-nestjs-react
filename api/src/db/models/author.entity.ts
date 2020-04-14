import {
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field } from "@nestjs/graphql";
import Book from './book.entity';


@ObjectType()
@Entity({
    name: 'authors'
})
export default class AuthorEntity {

    @Field()
    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;


    //associations

    @OneToMany(() => Book, book => book.authorConnection)
    bookConnection: Promise<Book[]>;


}