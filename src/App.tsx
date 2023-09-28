import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from '$/router/router';
import './App.scss';

const App = () => (
  <MantineProvider theme={{ fontFamily: 'Poppins, sans serif' }}>
    <RouterProvider router={router} />
  </MantineProvider>
);
export default App;
