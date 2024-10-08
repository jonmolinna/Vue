import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name;

  @IsEmail()
  email;

  @IsNotEmpty()
  password;
}
