// src/resolvers/author.resolver.ts
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FlowService } from 'src/modules/flow/flow.service';
import { Flow } from 'src/models/flow.model';
import { CreateFlowInput } from 'src/modules/flow/flow.dto';

@Resolver(() => Flow)
export class FlowResolver {
  constructor(private flowService: FlowService) {}

  @Query(() => Flow, { nullable: true })
  async Flow(@Args('id', { type: () => Int }) id: number) {
    return this.flowService.getFlowById(id);
  }

  @Mutation(() => Flow)
  async CreateFlow(@Args('CreateFlowInput') CreateFlowInput: CreateFlowInput) {
    return this.flowService.createFlow(CreateFlowInput);
  }
}
