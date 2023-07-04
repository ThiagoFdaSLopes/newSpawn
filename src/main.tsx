import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './Components/App';
import GlobalStyle from './Style/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
        <GlobalStyle />
        <App />
    </VisibilityProvider>
  </React.StrictMode>,
);
