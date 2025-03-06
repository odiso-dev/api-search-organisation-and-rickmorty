import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from './components/input-organisation';
import { ButtonSearch } from './components/button-search';
import { MemberTable } from './components/member-table';
import { Member } from './components/member';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  return (
    <>
      <h2>Filter by organisation</h2>
      <div>
        <InputSearch />
        <ButtonSearch />
      </div>
      <MemberTable />
      <div>
        <Link to="/detail">Navigate to detail page</Link>
      </div>
    </>
  );
};
