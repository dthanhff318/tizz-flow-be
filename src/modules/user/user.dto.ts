// src/dto/create-flow.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
