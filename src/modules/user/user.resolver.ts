// src/resolvers/author.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/models/user.model';
import { UserService } from 'src/modules/user/user.service';
import { RegisterInput, LoginInput } from './user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true })
  async Login(@Args('LoginInput') LoginInput: LoginInput) {
    return this.userService.login(LoginInput);
  }

  @Mutation(() => User)
  async Register(@Args('RegisterInput') RegisterInput: RegisterInput) {
    return this.userService.register(RegisterInput);
  }
}
