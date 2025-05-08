import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NationalRegistry } from './national-registry.entity';

@Entity('KYN')
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nafn: string;

  @Column()
  kodi: string;

  @OneToMany(() => NationalRegistry, (registry) => registry.gender)
  registryEntries: NationalRegistry[];
}
