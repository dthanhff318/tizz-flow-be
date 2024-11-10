// src/modules/author.module.ts
import { Module } from '@nestjs/common';
import { FlowResolver } from 'src/modules/flow/flow.resolver';
import { FlowService } from 'src/modules/flow/flow.service';

@Module({
  providers: [FlowService, FlowResolver],
  exports: [FlowService], // Export AuthorService if used in other modules
})
export class FlowModule {}
