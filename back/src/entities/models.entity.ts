import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Car from "./car.entity";
import Brand from "./brand.entity";

@Entity("models")
class Model {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Brand)
  brand: Brand;

  @Column()
  model_name: string;

  @Column("float")
  market_price: number;

  @Column()
  year: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updateAt: string;

  @OneToMany(() => Car, (car) => car.model)
  cars: Car[];
}

export default Model;
