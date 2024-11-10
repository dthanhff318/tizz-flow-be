import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres:123@localhost:5432/postgres?schema=public',
    },
  },
  log: ['info'],
});

export default prisma;
// use `prisma` in your application to read and write data in your DB
