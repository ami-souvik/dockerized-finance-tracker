import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';
import { Record } from './schemas/record.schema';
import { CreateRecordDto } from './dto/create-record.dto';
import { BulkWriteResult } from '../types';

@Injectable()
export class RecordsService {
  constructor(@InjectModel(Record.name) private recordModel: Model<Record>) {}

  async create(createRecordDto: CreateRecordDto): Promise<Record> {
    const createdRecord = new this.recordModel(createRecordDto);
    return createdRecord.save();
  }

  async createAll(records: CreateRecordDto[]): Promise<BulkWriteResult> {
    const createdRecords = records.map((r) => new this.recordModel(r));
    return this.recordModel.bulkSave(createdRecords);
  }

  async findAll(): Promise<Record[]> {
    return this.recordModel.find().exec();
  }

  async removeAll(): Promise<DeleteResult> {
    return this.recordModel.deleteMany();
  }
}
