// src/resolvers/hello.resolver.ts
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  sayHello() {
    return 'Hello, world!';
  }
}
