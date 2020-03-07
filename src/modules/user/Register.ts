import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcryptjs';
import { User } from "../../entities/User";



@Resolver()
export class RegisterResolver {
  @Query( () => String)
  async hello() {
    return "Hello World";
  }

  @Mutation( () => String)
  async Register(
    @Arg("firstName") firstName : string,
    @Arg("lastName") lastName : string,
    @Arg("email") email : string,
    @Arg("password") password : string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save()

    return user;
  }
}