import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';
import { TaxPayer } from './tax-payer.entity';

@Entity('THJODSKRA')
export class Person {
  @PrimaryColumn()
  kennitala: string;

  @Column()
  nafn: string;

  @Column()
  heimilisfang: string;

  @Column()
  tegund: string;

  @OneToOne(() => TaxPayer, (taxPayer) => taxPayer.person)
  taxPayer: TaxPayer;
}
