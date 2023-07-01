import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import Layout from './components/Layout.jsx';
import Results from './components/Results.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </Provider>
);
