import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { NotaModule } from './nota/nota.module';
import { Nota } from './entity/nota.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'molina125',
      database: 'vuedb',
      entities: [User, Nota],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    NotaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
