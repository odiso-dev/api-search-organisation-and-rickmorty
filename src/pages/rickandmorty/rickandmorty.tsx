import { ButtonSearch } from '@/components/button-search';
import { CardCharacter } from '@/components/detail-character';
import { InputSearch } from '@/components/input-organisation';
import { CharacterListContext } from '@/core/context/character.provider';
import { routes } from '@/core/router';
import { debounce } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutInnerPage } from '@/components/layout/layout-inner-page/';
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
    setUrlApiBase,
    countPrevPage,
    countNextPage,
    setCountPrevPage,
    setCountNextPage,
    setApiDefaultValue,
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
    setApiDefaultValue(inputValue);
    setUrlApiBase(
      `https://rickandmortyapi.com/api/character/?page=1&name=${inputValue}`
    );

    setCountPrevPage(1);
    setCountNextPage(info?.pages ?? 1);
  };

  const handlerPrevPage = () => {
    if (prevPage) {
      setUrlApiBase(prevPage);
      setCountPrevPage((prevCount: number | null) =>
        prevCount !== null ? prevCount - 1 : (info?.pages || 1) + 1
      );
    }
  };
  const handlerNextPage = () => {
    if (nextPage) {
      setUrlApiBase(nextPage);

      console.warn(`nextPage=> ${nextPage}`);
      setCountPrevPage((prevCount: number | null) =>
        prevCount !== null ? prevCount + 1 : (info?.pages || 1) + 1
      );
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <LayoutInnerPage classname={classes.rickAndMortyBg}>
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
          <ButtonSearch
            classname={classes.buttonSearch}
            onclick={handleButtonSearch}
          />
        </form>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.gridContent}
        sx={{ gap: '50px', marginTop: 'auto' }}
      >
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            title={`Click to see ${character.name}`}
          >
            <CardCharacter
              character={character}
              classname={`${
                character.status === 'Alive' ? classes.alive : null
              } ${character.status === 'Dead' ? classes.dead : null} ${
                character.status === 'unknown' ? classes.unknown : null
              } ${classes.cardCharacter}`}
            />
          </Link>
        ))}
      </Grid>

      <div className={classes.flex}>
        <BtnPagination
          onclickPrev={handlerPrevPage}
          classname={`${classBtn.btnPrev} ${classBtn.btn} ${
            !info?.prev ? classBtn.btnDisabled : ''
          }`}
          isDisabled={!info?.prev}
        >
          Prev
        </BtnPagination>

        <p>{`${countPrevPage ?? 1} of ${countNextPage ?? 1}`}</p>
        <BtnPagination
          onclickNext={handlerNextPage}
          classname={`${classBtn.btnNext} ${classBtn.btn}`}
          isDisabled={!info?.next}
        >
          Next
        </BtnPagination>
      </div>
    </LayoutInnerPage>
  );
};
