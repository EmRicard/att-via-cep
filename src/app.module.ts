import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ZipCodeApiModule } from './zip-code-api/zip-code-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ZipCodeApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
