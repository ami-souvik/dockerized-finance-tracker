import { Module } from '@nestjs/common';
import { RecordsModule } from '../records/records.module';
import { RecordsController } from '../records/records.controller';
import { RecordsService } from '../records/records.service';
import { StatementController } from './statements.controller';
import { StatementService } from './statements.service';
import { Record, RecordSchema } from '../records/schemas/record.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Statement, StatementSchema } from './schemas/statement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Statement.name, schema: StatementSchema },
      { name: Record.name, schema: RecordSchema },
    ]),
  ],
  controllers: [StatementController, RecordsController],
  providers: [StatementService, RecordsService],
  exports: [RecordsService],
})
export class StatementModule {}
