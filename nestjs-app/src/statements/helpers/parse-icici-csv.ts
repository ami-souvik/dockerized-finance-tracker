import mongoose from 'mongoose';
import { CreateRecordDto } from '@/src/records/dto/create-record.dto';

export default function parse(file: Express.Multer.File): CreateRecordDto[] {
  const multerText = Buffer.from(file.buffer).toString('utf-8');
  const rows = multerText.split('\n');
  const txns = {};
  rows.splice(21, rows.length - 43).forEach((r, i) => {
    let tokens = r.split(',');
    let txn = txns[tokens[0]];
    if (txn) {
      txns[tokens[0]].transactions.push({
        date: tokens[0],
        mode: tokens[1],
        particular: tokens[2],
        deposit: Number(tokens[3]),
        withdrawal: Number(tokens[4]),
        balance: Number(tokens[5]),
      });
    } else {
      txns[tokens[0]] = {
        _id: mongoose.Types.ObjectId.createFromTime(Number(tokens[0].replaceAll('-', ''))),
        date: tokens[0],
        transactions: [
          {
            date: tokens[0],
            mode: tokens[1],
            particular: tokens[2],
            deposit: Number(tokens[3]),
            withdrawal: Number(tokens[4]),
            balance: Number(tokens[5]),
          },
        ],
      };
    }
  });
  return Object.values(txns);
}
