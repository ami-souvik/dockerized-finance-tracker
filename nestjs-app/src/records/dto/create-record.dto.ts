import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateRecordDto {
  @IsString()
  @ApiProperty()
  date: string;

  @IsString()
  @ApiProperty()
  mode: string;

  @IsString({ message: 'particular must be a text' })
  @ApiProperty()
  particular: string;

  @IsNumber()
  @Max(9999999999)
  @Min(0)
  @ApiProperty()
  deposit: number;

  @IsNumber()
  @Max(9999999999)
  @Min(0)
  @ApiProperty()
  withdrawal: number;

  @IsNotEmpty()
  @IsNumber()
  @Max(9999999999)
  @Min(0)
  @ApiProperty()
  balance: number;
}
