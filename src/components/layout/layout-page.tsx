import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import classes from '@/components/layout/layout-page.module.css';

interface Props {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={classes.page}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
