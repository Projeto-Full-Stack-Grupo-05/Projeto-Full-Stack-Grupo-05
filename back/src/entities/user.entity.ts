import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./address.entity";
import Comment from "./comments.entity";
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

  @Column({ type: "varchar", nullable: true })
  resetToken: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string;

  @OneToOne(() => Sale, (sale) => sale.buyer)
  buyer: Sale;

  @OneToMany(() => Sale, (sales) => sales.user)
  sales: Sale[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Comment, (comments) => comments.user)
  @JoinColumn()
  comments: Comment[];

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
