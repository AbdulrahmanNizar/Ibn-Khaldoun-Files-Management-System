import * as mongoose from 'mongoose';

export const userFileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    file: { type: Object, required: true },
  },
  { timestamps: true },
);

export interface UserFile {
  id: string;
  userId: string;
  file: object;
}
