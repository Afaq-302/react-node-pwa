import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewNotification from './Components/NewNotification';
import { RouterProvider, createHashRouter } from 'react-router-dom';


const router = createHashRouter([{
  path: "/",
  element: <App />,
},
{
  path: "/about",
  element: <NewNotification />
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

