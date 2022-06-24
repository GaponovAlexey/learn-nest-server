import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface UserCreationAttrs {
  email: String
  password: String
}

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  Email: String

  @Column({ type: DataType.STRING, allowNull: false })
  password: String

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  banned: boolean

  @Column({ type: DataType.STRING, allowNull: true })
  banReason: String
}
