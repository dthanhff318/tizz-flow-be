// src/services/author.service.ts
import { Injectable } from '@nestjs/common';
import prisma from 'prisma/client';
import { CreateFlowInput } from 'src/modules/flow/flow.dto';

@Injectable()
export class FlowService {
  private flow = [{ id: '1', title: 'John', content: 'Duy tizz' }];

  async createFlow(flowData: CreateFlowInput) {
    const createdFlow = await prisma.flow.create({
      data: flowData,
    });
    return createdFlow;
  }

  async getFlowById(id: number) {
    return await prisma.flow.findUnique({
      where: {
        id,
      },
    });
  }
}
