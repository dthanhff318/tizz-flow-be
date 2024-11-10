// src/models/author.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Flow {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}
