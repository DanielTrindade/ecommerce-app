import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty({ required: false, default: new Date() })
  updatedAt: Date;
  @ApiProperty({ required: false, default: [] })
  cart: Cart[];
}
