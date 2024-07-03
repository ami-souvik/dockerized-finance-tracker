import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecordDocument = HydratedDocument<Record>;

class Transaction {
  @Prop()
  mode: string;

  @Prop({ required: true })
  particular: string;

  @Prop()
  deposit: number;

  @Prop()
  withdrawal: number;

  @Prop({ required: true })
  balance: number;
}

@Schema()
export class Record {
  @Prop({ required: true })
  date: string;

  @Prop([Transaction])
  transactions: Transaction[];
}

export const RecordSchema = SchemaFactory.createForClass(Record);
