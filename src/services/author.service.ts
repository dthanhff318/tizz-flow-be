// src/services/author.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  private authors = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Doe' },
  ];

  findOneById(id: string) {
    return this.authors.find((author) => author.id === id);
  }
}
