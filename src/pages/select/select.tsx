import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/core/router/routes';
import classes from './select.module.css';
import { LayoutInnerPage } from '@/components/layout/layout-inner-page';
import imgOrganisation from '@/assets/img-organisation.png';
import imgRickAndMorty from '@/assets/img-rickandmorty.jpg';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

export const SelectPage: React.FC = () => {
  return (
    <LayoutInnerPage classname={classes.LayoutSelectPage}>
      <h1>Select an option</h1>
      <div className={classes.layoutCards}>
        <Card sx={{ borderRadius: '8px' }} className={classes.organisationCard}>
          <Link to={routes.organisation}>
            <CardContent sx={{ textAlign: 'center' }}>
              <h2>Organisation</h2>
              <CardMedia component="img" image={imgOrganisation}></CardMedia>
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
                image={imgRickAndMorty}
                alt="Ricky and Morty"
              ></CardMedia>
            </CardContent>
          </Link>
        </Card>
      </div>
    </LayoutInnerPage>
  );
};
