
import {Field, ObjectType} from "@nestjs/graphql";
import {
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

@ObjectType('ApplicationModel')
@Table({ tableName: 'application' })
export class ApplicationModel extends Model {
  @Field()
  @Column({
    type: DataType.UUID,
    primaryKey: true
  })
  id!: string

  @Field()
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  created!: Date

  @Field()
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  modified!: Date

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  applicant!: string

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  state: string = "in progress"

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  type_id: string = "skattframtal"

  @Field()
  @Column({
    type: DataType.JSONB,
    allowNull: false
  })
  answers!: string

  @Field()
  @Column({
    type: DataType.JSONB,
    allowNull: false
  })
  external_data!: string

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status: string = "in progress"

}
function uuidv4() {
    throw new Error("Function not implemented.");
}

