import * as mongoose from 'mongoose';

export const subscriptionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    subscription: { type: Boolean, required: true },
    expired: { type: Boolean, required: true },
    subscriptionDate: { type: String, required: true },
    subscriptionExpireDate: { type: String, required: true },
  },
  { timestamps: true },
);

export interface Subscription {
  id: string;
  userId: string;
  phoneNumber: string;
  subscription: boolean;
  expired: boolean;
  subscriptionDate: string;
  subscriptionExpireDate: string;
}
