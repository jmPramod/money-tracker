import mongoose, { Schema, Document } from 'mongoose';
import { Bank } from './bank.model';

export interface Transaction extends Document {
  type: 'income' | 'expense';
  amount: number;
  date: Date;
  reason: string;
  note?: string;
  bank?: mongoose.Types.ObjectId | Bank; // Reference to Bank model
  includedInMonthlyTotal: boolean;
}

const transactionSchema: Schema = new Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  reason: { type: String, required: true },
  note: { type: String },
  bank: { type: Schema.Types.ObjectId, ref: 'Bank' }, // Reference to Bank model
  includedInMonthlyTotal: { type: Boolean, default: false },
});

export default mongoose.model<Transaction>('Transaction', transactionSchema);
