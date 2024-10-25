import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QueryZipCodeFromViaCepDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  zipCode: string;
}
