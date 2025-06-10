import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from '@/components/input-organisation';
import { ButtonSearch } from '@/components/button-search';
import { MemberTable } from '@/components/member-table';
import { debounce } from 'lodash';
import { LayoutInnerPage } from '@/components/layout/layout-inner-page';
import classes from './orgs.module.css';
import { MembersListContext } from '@/core/context';
import { routes } from '@/core/router';
import classStyleMain from '@/styles.css';
/* MUI */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const OrgsPage: React.FC = () => {
  const {
    members,
    apiOrganisationCurrentValue: fetchCurrentValue,
    setApiOrganisationCurrentValue: setFetchCurrentValue,
  } = React.useContext(MembersListContext);

  const [inputValue, setInputValue] = React.useState(fetchCurrentValue);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 12;

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const click = (e) => {
    e.target.value = '';
  };

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );

  const handleButtonSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFetchCurrentValue(inputValue);
  };

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
    <LayoutInnerPage>
      <Link to={routes.select} className={classStyleMain.backPage}>
        Back to select
      </Link>
      <h1>Filter by organisation</h1>
      <form className={classes.searchItems}>
        <InputSearch
          onchange={handleInputSearch}
          placeholder={inputValue}
          inputRef={inputRef}
          click={click}
        />
        <ButtonSearch
          classname={classes.buttonSearch}
          onclick={handleButtonSearch}
        >
          Search
        </ButtonSearch>
      </form>
      <MemberTable members={visibleMembers} />
      <div className={classes.flex}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePagination}
          />
        </Stack>
      </div>
    </LayoutInnerPage>
  );
};
