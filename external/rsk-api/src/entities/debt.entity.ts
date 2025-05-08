import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DebtType } from './debt-type.entity';
import { TaxReturn } from './tax-return.entity';
import { Person } from './person.entity';

@Entity('SKULDIR')
export class Debt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skuldategund_id: number;

  @Column({ nullable: true })
  titill: string;

  @Column()
  vaxtagjold: number;

  @Column()
  eftirstodvar: number;

  @Column()
  framtal_id: number;

  @Column({ nullable: true })
  kaupar: string;

  @Column({ nullable: true })
  stadsetning: string;

  @Column({ nullable: true })
  fastanumer: string;

  @Column({ nullable: true })
  kennitala_lanveitanda: string;

  @Column({ nullable: true })
  lansnumer: string;

  @Column({ type: 'timestamp', nullable: true })
  lantokudagur: Date;

  @Column({ nullable: true })
  lanstimi_i_arum: number;

  @Column({ nullable: true })
  heildargreidslur_arsins: number;

  @Column({ nullable: true })
  afborgun_nafnverd: number;

  @ManyToOne(() => DebtType, (debtType) => debtType.debts)
  @JoinColumn({ name: 'skuldategund_id' })
  tegund: DebtType;

  @ManyToOne(() => TaxReturn, (taxReturn) => taxReturn.skuldir)
  @JoinColumn({ name: 'framtal_id' })
  framtal: TaxReturn;

  @ManyToOne(() => Person)
  @JoinColumn({
    name: 'kennitala_lanveitanda',
    referencedColumnName: 'kennitala',
  })
  lanveitandi: Person;
}
