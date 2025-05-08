import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FormFieldGroup } from './form-field-group.entity';

@Entity('REITUR')
export class FormField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numer: string;

  @Column()
  nafn: string;

  @Column({ nullable: true })
  lysing: string;

  @Column()
  hopur_id: number;

  @ManyToOne(() => FormFieldGroup, (group) => group.fields)
  @JoinColumn({ name: 'hopur_id' })
  hopur: FormFieldGroup;
}
