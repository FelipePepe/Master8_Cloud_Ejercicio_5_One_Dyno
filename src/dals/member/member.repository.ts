import { Member } from './member.model';
import { MemberContext } from './member.context';
import { DocumentQuery } from 'mongoose';

export const getMemberList = async (): Promise<Member[]> => {
  const members = await MemberContext.find({})
    .select({
      _id: 1,
      idMember: 1,
      active: 1,
      email: 1,
      name: 1,
      lastdate: 1,
    })
    .lean();

  return members;
};

export const getMember = async (id: number): Promise<Member> => {
  const memberId = await MemberContext.findOne({
    _id: id,
  });

  console.log('memberId:', memberId);

  return memberId;
};

export const insertMemberList = async (memberList: Member[]) =>
  await MemberContext.insertMany(memberList);
