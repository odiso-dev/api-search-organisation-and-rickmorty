import React from 'react';
import { InputSearch } from '@/components/input-organisation';
import { ButtonSearch } from '@/components/button-search';
import { MemberTable } from '@/components/member-table';
import { debounce } from 'lodash';
import { LayoutPage } from '@/pages/layout-page/table-layout';
import classes from './list.module.css';
import { MembersContext } from '@/core/context';

export const ListPage: React.FC = () => {
  const {
    members,
    apiOrganisationCurrentValue: fetchCurrentValue,
    setApiOrganisationCurrentValue: setFetchCurrentValue,
  } = React.useContext(MembersContext);

  const [inputValue, setInputValue] = React.useState(fetchCurrentValue);

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
    <LayoutPage>
      <h2>Filter by organisation</h2>
      <div className={classes.searchItems}>
        <InputSearch onchange={handleInputSearch} placeholder={inputValue} />
        <ButtonSearch onclick={handleButtonSearch} />
      </div>
      <MemberTable members={members} />
    </LayoutPage>
  );
};
