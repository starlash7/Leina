import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Chat from './Chat';
import Learn from './Learn';
import Rewards from './Rewards';
import Profile from './Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/chat', element: <Chat /> },
      { path: '/learn', element: <Learn /> },
      { path: '/rewards', element: <Rewards /> },
      { path: '/profile', element: <Profile /> }
    ]
  }
]);