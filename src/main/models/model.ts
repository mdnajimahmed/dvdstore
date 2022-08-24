import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('address')
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {})
  id!: number;

  @Column('varchar')
  city: string;
}