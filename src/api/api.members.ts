import urlBase from '../env';
import { MemberEntity } from '../components/member.model';

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
