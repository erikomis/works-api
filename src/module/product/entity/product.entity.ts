import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column("varchar", { length: 255, name: "plu" })
  plu: string;

  @Column("varchar", { length: 255, name: "description" })
  description: string;

  @Column("varchar", { length: 255, name: "ncm" })
  ncm: string;

  @Column("varchar", { length: 255, name: "unit" })
  unit: string;

  @CreateDateColumn()
  created_at: Date;

  public toString(): string {
    return `Product [id=${this.id}, plu=${this.plu}, description=${this.description}, ncm=${this.ncm}, unit=${this.unit}, created_at=${this.created_at}]`;
  }
}
