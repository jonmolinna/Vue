import { Module } from '@nestjs/common';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from 'src/entity/nota.entity';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nota, User]), UsersModule],
  controllers: [NotaController],
  providers: [NotaService],
})
export class NotaModule {}
