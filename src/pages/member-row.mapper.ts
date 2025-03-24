import * as apiMemberModel from '../api/api.orgs-member.model';
import * as memberVm from './member-row.vm';

export const mapMemberApiToMemberVm = (
  apiMember: apiMemberModel.MemberEntity[]
): memberVm.MemberVm[] =>
  apiMember.map((member) => ({
    id: member.id,
    login: member.login,
    avatar_url: member.avatar_url,
  }));
