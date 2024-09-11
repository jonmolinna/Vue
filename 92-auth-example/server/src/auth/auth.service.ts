import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string): Promise<{ token: string } | any> {
    const user: User = await this.usersService.findOneEmail(email);

    if (user) {
      const isPassword = await bcrypt.compare(pass, user?.password);

      if (!isPassword) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, email: user.email };

      return {
        token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
