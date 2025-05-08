import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Asset } from './asset.entity';
import { Debt } from './debt.entity';
import { Income } from './income.entity';
import { Status } from './status.entity';
import { TaxPayer } from './tax-payer.entity';

@Entity('FRAMTAL')
export class TaxReturn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skattgreidandi_id: number;

  @Column({ nullable: true })
  ar: string;

  @Column()
  dags_stofnad: Date;

  @Column()
  eitt_uppgjor: boolean;

  @Column()
  slysatrygging_heimilisstorf: boolean;

  @Column({ nullable: true })
  fjolskyldumerking: string;

  @Column()
  stada_id: number;

  @ManyToOne(() => TaxPayer, (taxPayer) => taxPayer.taxReturns)
  @JoinColumn({ name: 'skattgreidandi_id' })
  skattgreidandi: TaxPayer;

  @ManyToOne(() => Status, (status) => status.taxReturns)
  @JoinColumn({ name: 'stada_id' })
  stada: Status;

  @OneToMany(() => Asset, (asset) => asset.framtal)
  eignir: Asset[];

  @OneToMany(() => Income, (income) => income.framtal)
  tekjur: Income[];

  @OneToMany(() => Debt, (debt) => debt.framtal)
  skuldir: Debt[];
}
