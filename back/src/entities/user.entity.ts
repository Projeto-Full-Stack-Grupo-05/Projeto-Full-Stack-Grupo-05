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
  JoinColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Sale from "./sales.entity";
import Address from "./address.entity";

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

  @Column({ type: "varchar", nullable: true })
  resetToken: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string;

  @OneToMany(() => Sale, (sale) => sale.seller)
  sale: Sale[];

  @OneToOne(() => Sale, (sale) => sale.buyer)
  buyer: Sale;

  @OneToMany(() => Sale, (sales) => sales.user)
  sales: Sale[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

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
