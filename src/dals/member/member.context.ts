import mongoose, { Document, Schema } from 'mongoose';
import { Member } from './member.model';

const memberSchema = new Schema({
  active: { type: Schema.Types.Boolean, required: true, default: false },
  idMember: { type: Schema.Types.Number, required: true },
  name: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  lastdate: { type: Schema.Types.String, required: false },
});

export const MemberContext = mongoose.model<Member & Document>(
  'Member',
  memberSchema
);
