import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Nota } from './nota.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => Nota, (nota) => nota.user)
  notas: Nota[];
}
