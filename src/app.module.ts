import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { databaseProvider } from './database/database.provider';
import DatabaseModule from './database/database.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, RegistrationModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
