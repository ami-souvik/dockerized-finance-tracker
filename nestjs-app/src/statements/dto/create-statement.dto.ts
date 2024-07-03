import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStatementDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  platform: string;

  @IsString()
  @ApiProperty()
  type: string;
}
