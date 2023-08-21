import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import Car from "./car.entity";
import Model from "./models.entity";

@Entity("brands")
class Brand {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand_name: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Car, (car) => car.brand)
  cars: Car[];

  @OneToMany(() => Model, (model) => model.brand)
  models: Model[];
}

export default Brand;
