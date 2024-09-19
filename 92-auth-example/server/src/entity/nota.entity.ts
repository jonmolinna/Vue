import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'notas' })
export class Nota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.notas)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
