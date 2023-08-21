import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import Model from "./models.entity";

export enum Fuel {
  Eletric = "eletric",
  Flex = "flex",
  Hybrid = "hybrid",
}

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  //     @ManyToOne(() => Brand)
  //   brands: Brand

  @ManyToOne(() => Model)
  model: Model;

  @Column()
  year: string;

  @Column({ enum: Fuel, default: Fuel.Flex })
  fuel: Fuel;

  @CreateDateColumn({ type: "date" })
  createdAt: string;
}

export default Car;
