import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/core/router';
import classes from './select.module.css';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

export const SelectPage: React.FC = () => {
  return (
    <div className={classes.layoutCards}>
      <Card sx={{ borderRadius: '8px' }}>
        <Link to={routes.organisation}>
          <CardContent>
            <CardMedia
              component="img"
              image="https://media.licdn.com/dms/image/v2/C4D0BAQGxXUBNYIpJWQ/company-logo_200_200/company-logo_200_200/0/1630484286517/lemoncode_freelancers_logo?e=2147483647&v=beta&t=7dsUFxFjHN9JjV0iOANdojuXYCs3a4cQswbv8a514x8"
              alt="search organisation"
            ></CardMedia>
          </CardContent>
        </Link>
      </Card>

      <Card sx={{ borderRadius: '8px' }}>
        <Link to={routes.rickandmorty}>
          <CardContent>
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
  );
};
