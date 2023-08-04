import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './Routes/ErrorPage.tsx';
import './index.css';
import { Menu } from './Routes/Menu.tsx';
import { Arena } from './Routes/Arena.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Menu />} />
      <Route path="/arena" element={<Arena />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
