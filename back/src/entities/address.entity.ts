import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";

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

  @Column({ type: "varchar", length: 6 })
  number: number;

  @Column()
  complement: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => User)
  user: User;
}

export default Address;
