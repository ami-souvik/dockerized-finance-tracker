import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatementModule } from './statements/statements.module';
import { FilesModule } from './files/files.module';
import { StatementController } from './statements/statements.controller';
import { StatementService } from './statements/statements.service';
import { Statement, StatementSchema } from './statements/schemas/statement.schema';
import { Record, RecordSchema } from './records/schemas/record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Statement.name, schema: StatementSchema },
      { name: Record.name, schema: RecordSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DB_URL'),
      }),
    }),
    StatementModule,
    FilesModule,
  ],
  controllers: [AppController, StatementController],
  providers: [AppService, StatementService],
})
export class AppModule {}
