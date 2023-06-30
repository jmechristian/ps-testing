import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import Layout from './components/Layout.jsx';
import Results from './components/Results.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/results',
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </Provider>
);
