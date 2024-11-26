// src/services/author.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import prisma from 'prisma/client';
import { LoginInput, RegisterInput } from './user.dto';

@Injectable()
export class UserService {
  async register(registerInput: RegisterInput) {
    const register = await prisma.user.create({
      data: registerInput,
    });
    return register;
  }
  async login(loginInput: LoginInput) {
    const { username } = loginInput;
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) {
      throw new HttpException(
        'Username or password incorrect',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return user;
    }
  }
}
