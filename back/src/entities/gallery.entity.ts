import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Car from "./car.entity";
import Model from "./models.entity";
import User from "./user.entity";
import SalesGallery from "./salesGallery.entity";

@Entity("galleries")
class Gallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  img_url: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => SalesGallery, (salesGallery) => salesGallery.gallery)
  gallery: SalesGallery[];
}

export default Gallery;
