import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Debt } from './debt.entity';

@Entity('SKULDATEGUND')
export class DebtType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nafn: string;

  @OneToMany(() => Debt, (debt) => debt.tegund)
  debts: Debt[];
}
