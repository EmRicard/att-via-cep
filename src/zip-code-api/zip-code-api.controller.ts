import { Controller, Get, Query } from '@nestjs/common';
import { ZipCodeApiService } from './zip-code-api.service';
import { QueryZipCodeFromViaCepDto } from './dto/query-zip-code-via-cep.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('viacep')
@ApiTags('viacep')
export class ZipCodeApiController {
  constructor(private readonly zipCodeApiService: ZipCodeApiService) {}

  @Get()
  async getZipCodeFromViaCep(
    @Query() query: QueryZipCodeFromViaCepDto,
  ): Promise<any> {
    return this.zipCodeApiService.getZipCodeFromViaCep(query);
  }
}
