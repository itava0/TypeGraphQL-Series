import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    //BaseEntity give us access to the function find and create to map over the database.

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()// The field decorator expose the field to graphQL
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    address: string;

    @Field()
    @Column("text", { unique: true })
    email: string;

    //Skip the Field() decorator so We don't exposed the user password in our graphQL schema.
    @Column()
    password: String;

}