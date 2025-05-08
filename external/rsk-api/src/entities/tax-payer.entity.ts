import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Person } from './person.entity';
import { TaxReturn } from './tax-return.entity';

@Entity('SKATTGREIDANDI')
export class TaxPayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  kennitala: string;

  @Column()
  netfang: string;

  @Column()
  simanumer: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'kennitala', referencedColumnName: 'kennitala' })
  person: Person;

  @OneToMany(() => TaxReturn, (taxReturn) => taxReturn.skattgreidandi)
  taxReturns: TaxReturn[];
}
