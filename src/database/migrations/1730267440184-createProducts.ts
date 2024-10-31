import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProducts1730267440184 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
  
      CREATE TABLE products (
        id INT IDENTITY(1,1) PRIMARY KEY,  
        plu NVARCHAR(50) NOT NULL UNIQUE,
        description NVARCHAR(255) NOT NULL,
        ncm NVARCHAR(20) NOT NULL,
        unidade NVARCHAR(20) NOT NULL,
        created_at DATETIME DEFAULT GETDATE()  
      );
     
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE products;");
  }
}
