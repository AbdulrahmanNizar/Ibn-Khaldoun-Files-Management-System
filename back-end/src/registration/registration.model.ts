import * as mongoose from 'mongoose';

export const registrationSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
    nationalId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    grade: { type: String, required: true },
    class: { type: String, required: true },
    logged: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export interface Registration {
  id: string;
  username: string;
  email: string;
  password: string;
  nationalId: string;
  phoneNumber: string;
  grade: string;
  class: string;
  logged: boolean;
}
