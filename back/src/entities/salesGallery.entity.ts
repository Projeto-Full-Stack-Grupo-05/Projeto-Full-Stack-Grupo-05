import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

import Sale from "./sales.entity";
import Gallery from "./gallery.entity";

@Entity("sales_galleries")
class SalesGallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Sale)
  sale: Sale;

    @ManyToOne(() => Gallery)
    gallery: Gallery;

  @CreateDateColumn({ type: "date" })
  createdAt: string;
}

export default SalesGallery;
