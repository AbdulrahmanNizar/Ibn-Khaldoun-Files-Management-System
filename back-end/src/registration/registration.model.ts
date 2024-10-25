import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
    nationalId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    grade: { type: String, required: true },
    class: { type: String, required: true },
    school: { type: String, required: true },
    schoolBranch: { type: String, required: true },
    schoolPlace: { type: String, required: true },
    gradeSection: { type: String, required: true },
    sex: { type: String, required: true },
    logged: { type: Boolean, required: true },
    subscription: { type: Boolean, required: true },
    subscriptionDate: { type: Object || String, required: true },
    subscriptionExpireDate: { type: Object || String, required: true },
  },
  { timestamps: true },
);

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  nationalId: string;
  phoneNumber: string;
  grade: string;
  class: string;
  school: string;
  schoolBranch: string;
  schoolPlace: string;
  sex: string;
  gradeSection: string;
  logged: boolean;
  subscription: boolean;
  subscriptionDate: object | string;
  subscriptionExpireDate: object | string;
}
