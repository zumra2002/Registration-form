import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormProvider } from './context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormProvider>
    <App />
  </FormProvider>
);

