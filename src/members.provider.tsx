import React from 'react';
import { MemberVm } from './member-row.vm';
import { apiMembers, emptyMember } from './api/api.members';
import { mapMemberApiToMemberVm } from './member-row.mapper';

interface MembersContextType {
  members: MemberVm[];
  apiOrganisationCurrentValue: string;
  setApiOrganisationCurrentValue: (value: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const MembersContext = React.createContext<MembersContextType>({
  members: emptyMember(),
  apiOrganisationCurrentValue: 'lemoncode',
  setApiOrganisationCurrentValue: () => {},
});

export const MembersProvider: React.FC<Props> = ({ children }) => {
  const [apiOrganisationCurrentValue, setApiOrganisationCurrentValue] =
    React.useState('lemoncode');
  const [members, setMembers] = React.useState<MemberVm[]>(emptyMember());
  console.warn(`first load `);
  console.warn(members);
  console.warn(apiOrganisationCurrentValue);
  console.warn(setApiOrganisationCurrentValue);

  React.useEffect(() => {
    apiMembers(apiOrganisationCurrentValue).then((membersApi) => {
      setMembers(mapMemberApiToMemberVm(membersApi));
    });
  }, [apiOrganisationCurrentValue]);

  return (
    <MembersContext.Provider
      value={{
        members,
        apiOrganisationCurrentValue: apiOrganisationCurrentValue,
        setApiOrganisationCurrentValue: setApiOrganisationCurrentValue,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};
