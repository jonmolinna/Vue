import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile() {
    return { msg: 'Profile' };
  }
}
