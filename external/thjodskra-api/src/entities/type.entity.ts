import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NationalRegistry } from './national-registry.entity';

@Entity('TEGUND_EIGINDI')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nafn: string;

  @Column()
  kodi: string;

  @OneToMany(() => NationalRegistry, (registry) => registry.type)
  registryEntries: NationalRegistry[];
}
