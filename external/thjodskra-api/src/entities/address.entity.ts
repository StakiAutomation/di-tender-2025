import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NationalRegistry } from './national-registry.entity';

@Entity('HEIMILISFANG')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gotuheiti: string;

  @Column()
  husnumer: string;

  @Column()
  postnumer: number;

  @Column()
  baejarfelag: string;

  @Column()
  land: string;

  @Column()
  landkodi: string;

  @OneToMany(() => NationalRegistry, (registry) => registry.address)
  registryEntries: NationalRegistry[];
}
