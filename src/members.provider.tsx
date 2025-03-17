import React from 'react';
import { MemberVm } from './member-row.vm';
import { apiMembers, emptyMember } from './api/api.members';
import { mapMemberApiToMemberVm } from './member-row.mapper';

interface Props {
  children: React.ReactNode;
}

export const MembersContext = React.createContext<MemberVm[]>(emptyMember());

export const MembersProvider: React.FC<Props> = ({ children }) => {
  const [fetchCurrentValue, setFetchCurrentValue] = React.useState('lemoncode');
  const [members, setMembers] = React.useState<MemberVm[]>(emptyMember());

  React.useEffect(() => {
    apiMembers(fetchCurrentValue).then((apiMembers) => {
      setMembers(mapMemberApiToMemberVm(apiMembers));
    });
  }, [fetchCurrentValue]);

  return (
    <MembersContext.Provider value={members}>
      {children}
    </MembersContext.Provider>
  );
};
