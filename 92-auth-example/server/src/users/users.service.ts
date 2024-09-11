import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  saltOrRounds = 10;
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async addUser(user: CreateUserDto): Promise<User> {
    const hashPassword = await bcrypt.hash(user.password, this.saltOrRounds);
    return await this.usersRepository.save({ ...user, password: hashPassword });
  }

  async findOneEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({ email });
  }
}
