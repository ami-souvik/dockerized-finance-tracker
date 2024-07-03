import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParseFileDto {
  @IsString()
  @ApiProperty()
  type: string;

  @IsString()
  @ApiProperty()
  platform: string;
}
