import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StatementDocument = HydratedDocument<Statement>;

class File {
  @Prop({ required: true })
  data: Buffer;

  @Prop({ required: true })
  mimetype: string;
}

@Schema()
export class Statement {
  @Prop()
  name: string;

  @Prop()
  platform: string;

  @Prop()
  file: File;
}

export const StatementSchema = SchemaFactory.createForClass(Statement);
