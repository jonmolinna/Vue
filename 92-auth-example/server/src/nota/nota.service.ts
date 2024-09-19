import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nota } from 'src/entity/nota.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class NotaService {
  constructor(
    @InjectRepository(Nota) private notasRepository: Repository<Nota>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async addNota(idUser: number, nota: string): Promise<Nota> {
    const user = await this.usersRepository.findOneBy({ id: idUser });
    const newNota = new Nota();
    newNota.content = nota;
    newNota.user = user;
    newNota.createdAt = new Date().getTime().toString();

    const response = await this.notasRepository.save(newNota);
    return response;
  }

  async getAllByUser(idUser: number): Promise<Nota[]> {
    const notas = await this.notasRepository.find({
      relations: { user: true },
      where: {
        user: {
          id: idUser,
        },
      },
      order: {
        createdAt: 'ASC',
      },
    });

    return notas;
  }
}
