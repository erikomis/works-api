import { IsNotEmpty, Length } from "class-validator";

export class ProductRequestDto {
  @IsNotEmpty({ message: "PLU cannot be empty" })
  @Length(4, 6, {
    message: "PLU must be between 4 and 6 characters",
  })
  plu: string;

  @IsNotEmpty({ message: "Description cannot be empty" })
  @Length(3, 255, {
    message: "Description must be between 3 and 255 characters",
  })
  description: string;

  @IsNotEmpty({ message: "Name cannot be empty" })
  @Length(8, 10, { message: "NCM must be between 8 and 10 characters" })
  ncm: string;

  @IsNotEmpty({ message: "Unit cannot be empty" })
  @Length(2, 3, { message: "Unit must be between 2 and 3 characters" })
  unit: string;
}
