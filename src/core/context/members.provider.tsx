import React from 'react';
import { MemberVm } from '@/pages/member-row.vm';
import { apiMembers, emptyMember } from '@/api';
import { mapMemberApiToMemberVm } from '@/pages/member-row.mapper';

interface MembersContextType {
  members: MemberVm[];
  apiOrganisationCurrentValue: string;
  setApiOrganisationCurrentValue: (value: string) => void;
  totalPages: number;
  handlePagination: (event: React.ChangeEvent<unknown>, page: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const MembersListContext = React.createContext<MembersContextType>({
  members: emptyMember(),
  apiOrganisationCurrentValue: 'lemoncode',
  setApiOrganisationCurrentValue: () => {},
  totalPages: 0,
  handlePagination: () => {},
});

export const MembersListProvider: React.FC<Props> = ({ children }) => {
  const [apiOrganisationCurrentValue, setApiOrganisationCurrentValue] =
    React.useState('lemoncode');
  const [members, setMembers] = React.useState<MemberVm[]>(emptyMember());
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 12;

  React.useEffect(() => {
    apiMembers(apiOrganisationCurrentValue).then((membersApi) => {
      setMembers(mapMemberApiToMemberVm(membersApi));
    });
  }, [apiOrganisationCurrentValue]);

  const totalPages = Math.ceil(members.length / itemsPerPage);
  const visibleMembers = members.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <MembersListContext.Provider
      value={{
        members: visibleMembers,
        apiOrganisationCurrentValue: apiOrganisationCurrentValue,
        setApiOrganisationCurrentValue: setApiOrganisationCurrentValue,
        totalPages,
        handlePagination,
      }}
    >
      {children}
    </MembersListContext.Provider>
  );
};
