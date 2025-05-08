import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FormField } from './form-field.entity';
import { Person } from './person.entity';
import { TaxReturn } from './tax-return.entity';

@Entity('TEKJUR')
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  framtal_id: number;

  @Column()
  titill: string;

  @Column()
  upphaed: number;

  @Column()
  reitur_id: number;

  @Column({ nullable: true })
  kennitala_greidanda: string;

  @ManyToOne(() => TaxReturn, (taxReturn) => taxReturn.tekjur)
  @JoinColumn({ name: 'framtal_id' })
  framtal: TaxReturn;

  @ManyToOne(() => FormField)
  @JoinColumn({ name: 'reitur_id' })
  reitur: FormField;

  @ManyToOne(() => Person)
  @JoinColumn({
    name: 'kennitala_greidanda',
    referencedColumnName: 'kennitala',
  })
  greidandi: Person;
}
