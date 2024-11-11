// src/modules/author.module.ts
import { Module } from '@nestjs/common';
import { UserResolver } from 'src/modules/user/user.resolver';
import { UserService } from 'src/modules/user/user.service';

@Module({
  providers: [UserService, UserResolver],
  exports: [UserService], // Export AuthorService if used in other modules
})
export class UserModule {}
