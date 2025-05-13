import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/core/router/routes';
import classes from './select.module.css';
import { LayoutInnerPage } from '@/components/layout/layout-inner-page';
import classStyleMain from '@/styles.css';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

export const SelectPage: React.FC = () => {
  return (
    <LayoutInnerPage classname={classes.LayoutSelectPage}>
      <Link to={routes.root} className={classStyleMain.backPage}>
        Back to select
      </Link>
      <h1>Select an option</h1>
      <div className={classes.layoutCards}>
        <Card sx={{ borderRadius: '8px' }} className={classes.organisationCard}>
          <Link to={routes.root}>
            <CardContent sx={{ textAlign: 'center' }}>
              <h2>Organisation</h2>
              <CardMedia
                component="img"
                image="https://www.edubreak.de/wp-content/uploads/2024/02/eb-Website-Blog-Titelbild-Wissensmanagement-min-2.png"
                alt="search organisation"
              ></CardMedia>
            </CardContent>
          </Link>
        </Card>

        <Card sx={{ borderRadius: '8px' }} className={classes.rickAndMortyCard}>
          <Link to={routes.rickandmorty}>
            <CardContent sx={{ textAlign: 'center' }}>
              <h2>Rick&Morty</h2>
              <CardMedia
                sx={{ objectFit: 'content' }}
                component="img"
                image="https://i.blogs.es/cfa26e/rickandmortycabecera/650_1200.jpg"
                alt="Ricky and Morty"
              ></CardMedia>
            </CardContent>
          </Link>
        </Card>
      </div>
    </LayoutInnerPage>
  );
};
