//2- interface do nestjs

import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export class Products{
    // campos verificadores

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    stock: number

    @IsString()
    @IsNotEmpty()
    price_c: string

    @IsString()
    @IsNotEmpty()
    price: string

}