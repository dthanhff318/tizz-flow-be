// src/models/author.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  passwords: string;

  @Field(() => String)
  avatar: string;

  @Field(() => String)
  displayName: string;
}
