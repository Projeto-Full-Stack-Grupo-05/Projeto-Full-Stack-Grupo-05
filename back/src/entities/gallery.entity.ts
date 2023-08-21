import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

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
