import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  BeforeUpdate,
  DeleteDateColumn,
  OneToOne,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Sale from "./sales.entity";

export enum Profile {
  Buyer = "buyer",
  Advertiser = "advertiser",
}

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ length: 20 })
  cellphone: string;

  @Column()
  birthdate: string;

  @Column()
  description: string;

  @Column()
  cpf: string;

  @Column({ enum: Profile, default: Profile.Buyer })
  profile: Profile;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string;

  @OneToMany(() => Sale, (sale) => sale.seller)
  sales: Sale[];

  @OneToOne(() => Sale, (sale) => sale.buyer)
  buyer: Sale;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
