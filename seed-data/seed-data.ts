import { disconnect, Types } from 'mongoose';
import { connectToDB } from '../src/core/database';
import { envConstants } from '../src/core/constants';
import { insertMemberList, Member } from '../src/dals/member';

const devMemberList: Member[] = [
  {
    _id: new Types.ObjectId().toHexString(),
    name: 'name 1',
    email: 'name_1@my_dev_domain.com',
    active: true,
    idMember: 1,
    lastdate: '10/10/2020',
  },
  {
    _id: new Types.ObjectId().toHexString(),
    name: 'name 1',
    email: 'name_1@my_dev_domain.com',
    active: true,
    idMember: 2,
    lastdate: '12/09/2020',
  },
];

const prodMemberList: Member[] = [
  {
    _id: new Types.ObjectId().toHexString(),
    name: 'name 1',
    email: 'name_1@my_prod_domain.com',
    active: true,
    idMember: 1,
    lastdate: '23/10/2020',
  },
  {
    _id: new Types.ObjectId().toHexString(),
    name: 'name 2',
    email: 'name_2@my_prod_domain.com',
    active: true,
    idMember: 2,
    lastdate: '25/12/2019',
  },
];

export const run = async () => {
  await connectToDB(envConstants.MONGODB_URI);

  const memberList = envConstants.isProduction ? prodMemberList : devMemberList;
  console.log({ memberList });

  await insertMemberList(memberList);
  console.log('Inserted member list');

  await disconnect();
};

run();
