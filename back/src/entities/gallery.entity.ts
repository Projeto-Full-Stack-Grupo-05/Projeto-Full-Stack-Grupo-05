import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Sale from "./sales.entity";

// import SalesGallery from "./salesGallery.entity";

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

  // @OneToMany(() => SalesGallery, (salesGallery) => salesGallery.gallery)
  // gallery: SalesGallery[];
}

export default Gallery;
