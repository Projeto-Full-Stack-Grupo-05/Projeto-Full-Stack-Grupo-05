import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Car from "./car.entity";
import Model from "./models.entity";
import User from "./user.entity";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  zip_code: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column({ length: 5 })
  number: number;

  @Column()
  complement: string;

  @UpdateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User)
  user: User;
}

export default Address;
