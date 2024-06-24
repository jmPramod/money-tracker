import mongoose, { Schema, Document } from 'mongoose';

export interface Bank extends Document {
  name: string;
  accounts: {
    type: string;
    balance: number;
  }[];
  // Add other fields as per your requirements
}

const bankSchema: Schema = new Schema({
  name: { type: String, required: true },
  accounts: [
    {
      type: {
        type: String,
        enum: ['FD', 'RD', 'Savings', 'Current'],
        required: true,
      },
      balance: { type: Number, default: 0 },
    },
  ],
  // Define other fields here
});

export default mongoose.model<Bank>('Bank', bankSchema);
