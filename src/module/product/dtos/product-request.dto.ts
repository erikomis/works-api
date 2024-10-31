import { IsNotEmpty, Length } from "class-validator";

export class ProductRequestDto {
  @IsNotEmpty({ message: "PLU não pode ser vazio" })
  @Length(4, 6, {
    message: "PLU precisa ter entre 4 e 6 caracteres",
  })
  plu: string;
  @IsNotEmpty({ message: "Descrição nao pode ser vazio" })
  @Length(3, 255, { message: "Descrição precisa ter entre 3 e 255 caracteres" })
  description: string;
  @IsNotEmpty({ message: "Nome não pode ser vazio" })
  @Length(8, 10, { message: "NCM precisa ter entre 3 e 10 caracteres" })
  ncm: string;
  @IsNotEmpty({ message: "unidade não pode ser vazio" })
  @Length(2, 3, { message: "unidade precisa ter entre 2 e 3 caracteres" })
  unidade: string;
}
