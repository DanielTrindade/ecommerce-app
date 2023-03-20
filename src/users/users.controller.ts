import { PrismaService } from './../prisma/prisma.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'this action adds a new user';
  }

  @Get()
  findAll() {
    return this.prisma.user.findMany();
  }
}
