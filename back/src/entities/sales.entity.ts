import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import User from "./user.entity";
import Car from "./car.entity";

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

  @ManyToOne(() => Car)
  car: Car;
}

export default Sale;
