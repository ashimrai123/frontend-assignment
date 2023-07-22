import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './styles.css'; 


const queryClient = new QueryClient(); // Create a new instance of QueryClient

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
