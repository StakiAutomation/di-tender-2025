import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AssetType } from './asset-type.entity';
import { FormField } from './form-field.entity';
import { TaxReturn } from './tax-return.entity';

@Entity('EIGNIR')
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tegund_id: number;

  @Column({ nullable: true })
  titill: string;

  @Column({ nullable: true })
  numer: string;

  @Column({ nullable: true })
  heimilisfang: string;

  @Column({ nullable: true })
  kaupar: string;

  @Column()
  upphaed: number;

  @Column()
  framtal_id: number;

  @Column()
  reitur_id: number;

  @ManyToOne(() => AssetType, (assetType) => assetType.assets)
  @JoinColumn({ name: 'tegund_id' })
  tegund: AssetType;

  @ManyToOne(() => TaxReturn, (taxReturn) => taxReturn.eignir)
  @JoinColumn({ name: 'framtal_id' })
  framtal: TaxReturn;

  @ManyToOne(() => FormField)
  @JoinColumn({ name: 'reitur_id' })
  reitur: FormField;
}
