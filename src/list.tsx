import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from './components/input-organisation';
import { ButtonSearch } from './components/button-search';
import { MemberTable } from './components/member-table';
import { Member } from './components/member';
import { apiMembers } from './api/api.members';

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [fetchCurrentValue, setFetchCurrentValue] = React.useState('lemoncode');
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    apiMembers(fetchCurrentValue).then(setMembers);
  }, [fetchCurrentValue]);

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonSearch = () => {
    setFetchCurrentValue(inputValue);
  };

  return (
    <>
      <h2>Filter by organisation</h2>
      <div>
        <InputSearch onchange={handleInputSearch} />
        <ButtonSearch onclick={handleButtonSearch} />
      </div>
      <MemberTable members={members} />
      <div>
        <Link to="/detail">Navigate to detail page</Link>
      </div>
    </>
  );
};
