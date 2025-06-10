import React from 'react';
import { MemberVm } from '@/pages/member-row.vm';
import { apiMembers, emptyMember } from '@/api';
import { mapMemberApiToMemberVm } from '@/pages/member-row.mapper';

interface MembersContextType {
  members: MemberVm[];
  apiOrganisationCurrentValue: string;
  setApiOrganisationCurrentValue: (value: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const MembersListContext = React.createContext<MembersContextType>({
  members: emptyMember(),
  apiOrganisationCurrentValue: 'lemoncode',
  setApiOrganisationCurrentValue: () => {},
});

export const MembersListProvider: React.FC<Props> = ({ children }) => {
  const [apiOrganisationCurrentValue, setApiOrganisationCurrentValue] =
    React.useState('google');
  const [members, setMembers] = React.useState<MemberVm[]>(emptyMember());
  /* const [page, setPage] = React.useState(1);
  const itemsPerPage = 12; */

  React.useEffect(() => {
    apiMembers(apiOrganisationCurrentValue).then((membersApi) => {
      setMembers(mapMemberApiToMemberVm(membersApi));
    });
  }, [apiOrganisationCurrentValue]);

  return (
    <MembersListContext.Provider
      value={{
        members,
        apiOrganisationCurrentValue: apiOrganisationCurrentValue,
        setApiOrganisationCurrentValue: setApiOrganisationCurrentValue,
      }}
    >
      {children}
    </MembersListContext.Provider>
  );
};
