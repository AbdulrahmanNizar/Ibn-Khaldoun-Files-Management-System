import * as mongoose from 'mongoose';

export const registrationSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    logged: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export interface Registration {
  id: string;
  username: string;
  email: string;
  password: string;
  logged: boolean;
}
