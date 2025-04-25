import { ButtonSearch } from '@/components/button-search';
import { CardCharacter } from '@/components/detail-character';
import { InputSearch } from '@/components/input-organisation';
import { CharacterListContext } from '@/core/context/character.provider';
import { routes } from '@/core/router';
import { debounce } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../layout-page/table-layout';
import classes from './rickandmorty.module.css';
import classStyleMain from '@/styles.css';
import { BtnPagination } from '@/components/button.pagination';
import classBtn from '@/components/button-pagination.module.css';
// import { emptyPagination } from '@/api/api.rickandmorty';
/* MUI */
import { Grid } from '@mui/material/';

export const RickAndMorty: React.FC = () => {
  const {
    characters,
    apiDefaultValue,
    prevPage,
    nextPage,
    info,
    urlApiBase,
    setUrlApiBase,
    setInputVal,
  } = React.useContext(CharacterListContext);

  const [inputValue, setInputValue] = React.useState(apiDefaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    300
  );
  const click = (e) => {
    e.target.value = '';
  };

  const handleButtonSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputVal(inputValue);
    setUrlApiBase(`${urlApiBase}${inputValue}`);
    console.log(urlApiBase);
  };

  const handlerPrevPage = () => {
    if (prevPage) {
      console.log(prevPage);
      setUrlApiBase(prevPage);
    }
  };

  const handlerNextPage = () => {
    if (nextPage) {
      console.log(nextPage);
      setUrlApiBase(nextPage);
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <LayoutPage classname={classes.rickandmortyBackground}>
      <Link className={classStyleMain.backPage} to={routes.select}>
        Back to select
      </Link>
      <h1>Rick and Morty search characters</h1>
      <div>
        <form className={classes.searchItems}>
          <InputSearch
            onchange={handleInputSearch}
            placeholder={inputValue}
            inputRef={inputRef}
            click={click}
          />
          <ButtonSearch onclick={handleButtonSearch} />
        </form>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.gridContent}
        sx={{ gap: '50px', marginTop: 'auto' }}
      >
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CardCharacter
              character={character}
              classname={`${
                character.status === 'Alive' ? classes.alive : null
              } ${character.status === 'Dead' ? classes.dead : null} ${
                character.status === 'unknown' ? classes.unknown : null
              }`}
            />
          </Link>
        ))}
      </Grid>
      <div className={classes.flex}>
        <BtnPagination
          onclickPrev={handlerPrevPage}
          classname={`${classBtn.btnPrev} ${classBtn.btn}`}
          isDisabled={!info?.prev ? true : false}
        >
          Prev
        </BtnPagination>
        <p>{`${info?.pages ? info?.pages - info.pages + 1 : null} of ${
          info?.pages ? info?.pages : null
        }`}</p>
        <BtnPagination
          onclickNext={handlerNextPage}
          classname={`${classBtn.btnNext} ${classBtn.btn}`}
          isDisabled={!info?.next ? true : false}
        >
          Next
        </BtnPagination>
      </div>
    </LayoutPage>
  );
};
