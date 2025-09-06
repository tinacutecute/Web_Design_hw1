import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('businessRole')
export class BusinessRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  // e.g. STD, CPO...
}
