import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import User from "./user.entity";
import Car from "./car.entity";
import Gallery from "./gallery.entity";

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
  car_id: string;

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

  @Column({ enum: SaleStatus, default: SaleStatus.Active })
  status: SaleStatus;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToOne(() => User)
  buyer: User;

  @ManyToOne(() => User)
  seller: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" }) 
  user: User;

  @ManyToOne(() => Gallery)
  @JoinColumn({ name: "gallery_id" })
  gallery: Gallery;

  // @ManyToOne(() => Car)
  // car: Car;
}

export default Sale;
