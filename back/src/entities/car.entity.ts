import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

export enum Fuel {
  Eletric = "eletric",
  Flex = "flex",
  Hybrid = "hybrid",
}

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand_name: string;

  @Column()
  model_name: string;

  @Column("float")
  market_price: number;

  @Column()
  year: string;

  @Column({ enum: Fuel, default: Fuel.Flex })
  fuel: Fuel;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updateAt: string;
}

export default Car;
