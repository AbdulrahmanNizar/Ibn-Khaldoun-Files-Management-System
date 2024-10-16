import * as mongoose from 'mongoose';

export const fileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fileTitle: { type: String, required: true },
    fileDescription: { type: String, required: true },
    file: { type: Object, required: true },
    tirm: { type: String, required: true },
    subject: { type: String, required: true },
    createdAtTime: { type: String, required: true },
    createdAtDate: { type: String, required: true },
  },
  { timestamps: true },
);

export interface file {
  id: string;
  userId: string;
  fileTitle: string;
  fileDescription: string;
  file: object;
  tirm: string;
  subject: string;
  createdAtTime: string;
  createdAtDate: string;
}
