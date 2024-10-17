import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { NotaService } from './nota.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateNotaDto } from './dto/create-nota.dto';

@Controller('nota')
export class NotaController {
  constructor(private notaService: NotaService) {}

  @UseGuards(AuthGuard)
  @Post('add')
  async addNota(@Request() req, @Body() notaDto: CreateNotaDto) {
    const idUser = req.user.sub;

    const response = await this.notaService.addNota(idUser, notaDto.content);

    return {
      status: true,
      data: response,
    };
  }

  @UseGuards(AuthGuard)
  @Get('notas')
  async getNotasByUser(@Request() req) {
    const idUser = req.user.sub;
    return this.notaService.getAllByUser(idUser);
  }
}
