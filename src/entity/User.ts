import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";

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

    @Field()
    //Getter function to the name of the user
    name(@Root() parent: User): string {
        return `${parent.firstName} ${parent.lastName}`;
    }

    //Skip the Field() decorator so We don't want to exposed the user password in our graphQL schema.
    @Column()
    password: String;

}