import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProcedureProduct1730330739024 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE PROCEDURE InsertProduct
                @Plu NVARCHAR(50),
                @Description NVARCHAR(255),
                @Ncm NVARCHAR(20),
                @Unidade NVARCHAR(20)
            AS
            BEGIN
                INSERT INTO Products (plu, description, ncm, unidade)
                VALUES (@Plu, @Description, @Ncm, @Unidade);
            END;
        `);

    await queryRunner.query(`
        CREATE PROCEDURE GetPagedProducts
        @PageNumber INT,
        @PageSize INT
        AS
        BEGIN
        SELECT *
        FROM Products
        ORDER BY id 
        OFFSET (@PageNumber - 1) * @PageSize ROWS
        FETCH NEXT @PageSize ROWS ONLY;
        END;
        `);

    await queryRunner.query(`
            CREATE PROCEDURE GetProductById
                @ProductId INT
            AS
            BEGIN
                SELECT * FROM Products WHERE id = @ProductId;
            END;
        `);

    await queryRunner.query(`
            CREATE PROCEDURE UpdateProduct
                @ProductId INT,
                @Plu NVARCHAR(50),
                @Description NVARCHAR(255),
                @Ncm NVARCHAR(20),
                @Unidade NVARCHAR(20)
            AS
            BEGIN
                UPDATE Products
                SET plu = @Plu, description = @Description, ncm = @Ncm,  unidade = @Unidade
                WHERE id = @ProductId;
            END;
        `);

    await queryRunner.query(`
            CREATE PROCEDURE DeleteProduct
                @ProductId INT
            AS
            BEGIN
                DELETE FROM Products WHERE id = @ProductId;
            END;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP PROCEDURE IF EXISTS DeleteProduct;");
    await queryRunner.query("DROP PROCEDURE IF EXISTS UpdateProduct;");
    await queryRunner.query("DROP PROCEDURE IF EXISTS GetProductById;");
    await queryRunner.query("DROP PROCEDURE IF EXISTS GetAllProducts;");
    await queryRunner.query("DROP PROCEDURE IF EXISTS InsertProduct;");
  }
}
