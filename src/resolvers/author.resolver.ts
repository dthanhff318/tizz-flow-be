// src/resolvers/author.resolver.ts
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query(() => Author, { nullable: true })
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOneById(String(id));
  }
}
