import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsService } from '../records/records.service';
import { BulkWriteResult } from '../types';
import { CreateStatementDto } from './dto/create-statement.dto';
import { ParseFileDto } from './dto/parse-file.dto';
import { default as parseIcici } from './helpers/parse-icici-csv';
import { Statement } from './schemas/statement.schema';

@Injectable()
export class StatementService {
  constructor(
    @InjectModel(Statement.name) private statementModel: Model<Statement>,
    private readonly recordsService: RecordsService,
  ) {}

  async create(body: CreateStatementDto, file: Express.Multer.File) {
    this.statementModel.create({
      name: file.filename,
      ...body,
      file: {
        mimetype: file.mimetype,
        data: file.buffer,
      },
    });
    return this.recordsService.createAll(parseIcici(file));
  }

  async parse(body: ParseFileDto, file: Express.Multer.File): Promise<BulkWriteResult> {
    return this.recordsService.createAll(parseIcici(file));
  }

  async findAll(): Promise<Statement[]> {
    return this.statementModel.find().exec();
  }
}
