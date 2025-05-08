import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Form } from './form.entity';
import { FormField } from './form-field.entity';

@Entity('REITUR_HOPUR')
export class FormFieldGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numer: string;

  @Column()
  nafn: string;

  @Column()
  eydublad_id: number;

  @ManyToOne(() => Form, (form) => form.groups)
  @JoinColumn({ name: 'eydublad_id' })
  eydublad: Form;

  @OneToMany(() => FormField, (field) => field.hopur)
  fields: FormField[];
}
