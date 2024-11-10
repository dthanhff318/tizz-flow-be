// src/dto/create-flow.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlowInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}
