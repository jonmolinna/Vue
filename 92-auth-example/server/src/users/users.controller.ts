import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUseDto: CreateUserDto) {
    const response = await this.usersService.addUser(createUseDto);
    return {
      message: 'User Created Successfully',
      user: {
        id: response.id,
        name: response.name,
        email: response.email,
      },
      status: true,
    };
  }
}
