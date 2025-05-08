import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asset } from './asset.entity';

@Entity('EIGNIR_TEGUND')
export class AssetType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nafn: string;

  @OneToMany(() => Asset, (asset) => asset.tegund)
  assets: Asset[];
}
