import { IsNotEmpty } from 'class-validator';

export class CreateNotaDto {
  @IsNotEmpty()
  content;
}
