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
