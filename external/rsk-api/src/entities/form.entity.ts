import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FormFieldGroup } from './form-field-group.entity';

@Entity('EYDUBLAD')
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numer: string;

  @Column()
  nafn: string;

  @OneToMany(() => FormFieldGroup, (group) => group.eydublad)
  groups: FormFieldGroup[];
}
