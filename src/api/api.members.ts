import urlBase from '../env';
import { MemberEntity } from './api.member.model';
import { MemberVm } from '../member-row.vm';

export const apiMembers = async (
  typeOrganisation: string
): Promise<MemberEntity[]> => {
  try {
    return fetch(`${urlBase}${typeOrganisation}/members`).then((response) =>
      response.json()
    );
  } catch (error) {
    throw new Error(`** Failed conection API ${error} **`);
  }
};

export const emptyMember = (): MemberVm[] => [
  {
    login: '',
    id: '',
    avatar_url: '',
  },
];

export const emptyMemberDetail = (): MemberEntity => ({
  id: '',
  login: '',
  name: '',
  avatar_url: '',
  node_id: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  events_url: '',
  received_events_url: '',
  type: '',
  user_view_type: '',
  site_admin: false,
});
