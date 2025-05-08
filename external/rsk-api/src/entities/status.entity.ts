import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TaxReturn } from './tax-return.entity';

@Entity('STADA')
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nafn: string;

  @Column()
  kodi: string;

  @OneToMany(() => TaxReturn, (taxReturn) => taxReturn.stada)
  taxReturns: TaxReturn[];
}
