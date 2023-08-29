import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Sale from "./sales.entity";
import User from "./user.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => Sale)
  @JoinColumn({ name: "sale_id" })
  sale: Sale;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}

export default Comment;
