import * as model from 'dals/member/member.model';
import * as apiModel from './member.api-model';

export const mapMemberFromModelToApi = (
  member: model.Member
): apiModel.Member => ({
  _id: member._id,
  idMember: member.idMember,
  name: member.name,
  email: member.email,
  lastdate: member.lastdate,
  active: member.active,
});

export const mapMemberListFromModelToApi = (
  memberList: model.Member[]
): apiModel.Member[] => memberList.map(mapMemberFromModelToApi);
