import "reflect-metadata"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Course {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('text', { nullable: false })
  public title: string

  @Column('text', { nullable: false })
  public description: string
}