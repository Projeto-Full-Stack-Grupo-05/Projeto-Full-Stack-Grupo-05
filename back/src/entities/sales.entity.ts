import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Comment from "./comments.entity";
import Gallery from "./gallery.entity";
import User from "./user.entity";

export enum SaleStatus {
  Active = "active",
  Sold = "sold",
}

@Entity("sales")
class Sale {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_id: string;

  @Column()
  brand: string

  @Column()
  title: string;

  @Column()
  img_url: string;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  fuel: string;

  @Column()
  year: number;

  @Column()
  description: string;

  @Column()
  kilometers: number;

  @Column({ type: "enum", enum: SaleStatus, default: SaleStatus.Active })
  status: SaleStatus;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn({ name: "buyer_id" })
  buyer: User | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Gallery, (gallery) => gallery.sale)
  @JoinColumn({ name: "gallery_id" })
  gallery: Gallery[];

  @OneToMany(() => Comment, (comment) => comment.sale)
  comments: Comment[];
}

export default Sale;
