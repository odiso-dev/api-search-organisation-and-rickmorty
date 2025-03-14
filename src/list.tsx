import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from './components/input-organisation';
import { ButtonSearch } from './components/button-search';
import { MemberTable } from './components/member-table';
import { apiMembers } from './api/api.members';
import { emptyMember } from './api/api.members';
import { debounce } from 'lodash';
import { TableLayout } from './components/table-layout';
import classes from './list.module.css';
import { MemberVm } from './member-row.vm';
import { mapMemberApiToMemberVm } from './member-row.mapper';

export const ListPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('lemoncode');
  const [members, setMembers] = React.useState<MemberVm[]>(emptyMember());
  const [fetchCurrentValue, setFetchCurrentValue] = React.useState('lemoncode');

  React.useEffect(() => {
    apiMembers(fetchCurrentValue).then((apiMembers) => {
      setMembers(mapMemberApiToMemberVm(apiMembers));
    });
  }, [fetchCurrentValue]);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );

  const handleButtonSearch = () => {
    setFetchCurrentValue(inputValue);
  };

  return (
    <TableLayout>
      <h2>Filter by organisation</h2>
      <div className={classes.searchItems}>
        <InputSearch onchange={handleInputSearch} placeholder={inputValue} />
        <ButtonSearch onclick={handleButtonSearch} />
      </div>
      <MemberTable members={members} />
      <div>
        <Link to="/detail">Navigate to detail page</Link>
      </div>
    </TableLayout>
  );
};
