import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Sale from "./sales.entity";

@Entity("galleries")
class Gallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  img_url: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => Sale)
  sale: Sale;
}

export default Gallery;
