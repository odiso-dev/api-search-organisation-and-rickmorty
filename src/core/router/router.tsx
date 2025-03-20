import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { ListPage } from '@/pages/list';
import { DetailPage } from '@/pages/detail';
import { routes } from '@/core/router';

export const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.root} element={<LoginPage />} />
        <Route path={routes.list} element={<ListPage />} />
        <Route path={routes.detail} element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
