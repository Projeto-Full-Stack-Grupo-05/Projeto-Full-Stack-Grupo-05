import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";

export enum Fuel {
  Eletric = "eletric",
  Flex = "flex",
  Hybrid = "hybrid",
}

@Entity("car")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  //     @ManyToOne(() => Brand)
  //   brand_id: Brand.id

  //     @ManyToOne(() => Model)
  //   model_id: Model.id

  @Column()
  year: string;

  @Column({ enum: Fuel, default: Fuel.Flex })
  fuel: Fuel;

  @CreateDateColumn({ type: "date" })
  createdAt: string;
}

export default Car;
