import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Gender } from './gender.entity';
import { Address } from './address.entity';
import { Type } from './type.entity';

@Entity('THJODSKRA')
export class NationalRegistry {
  @PrimaryColumn()
  kennitala: string;

  @Column()
  nafn: string;

  @Column()
  kyn_id: number;

  @Column()
  heimilisfang_id: number;

  @Column()
  tegund_id: number;

  @ManyToOne(() => Gender)
  @JoinColumn({ name: 'kyn_id' })
  gender: Gender;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'heimilisfang_id' })
  address: Address;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'tegund_id' })
  type: Type;
}
