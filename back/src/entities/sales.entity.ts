import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("sales")
class Sale {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_id: string;

  @Column()
  car_id: string;

  @Column()
  img_url: string;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  fuel: string;

  @Column({ type: "date" })
  year: string;

  @Column()
  description: string;

  @Column()
  kilometers: number;

  //   @Column()
  //   model: string;

  //   @Column()
  //   value: number;

  //   @Column()
  //   buyer: user_id;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  //   @ManyToOne(() => User)
  //   user: User;
  // }

  //   @ManyToOne(() => Car)
  //   car: Car;
  // }
}

export default Sale;
