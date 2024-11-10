// src/modules/author.module.ts
import { Module } from '@nestjs/common';
import { AuthorResolver } from 'src/resolvers/author.resolver';
import { AuthorService } from 'src/services/author.service';

@Module({
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService], // Export AuthorService if used in other modules
})
export class AuthorModule {}
