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
  usersService: UsersService;
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.prisma.user.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
