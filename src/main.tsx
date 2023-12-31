import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './Routes/ErrorPage.tsx';
import { Menu } from './Routes/Menu.tsx';
import { Arena } from './Routes/Arena/Arena.tsx';
import { Provider } from 'react-redux';
import { store } from './Components/Store/store.ts';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
