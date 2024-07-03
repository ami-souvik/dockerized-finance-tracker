export interface BulkWriteResult {
  insertedCount: number;
  matchedCount: number;
  modifiedCount: number;
  deletedCount: number;
  upsertedCount: number;
  upsertedIds: {
    [k: string]: number;
  };
  insertedIds: {
    [k: string]: number;
  };
}
