import React from 'react';
import App from './App';
import { ColorProvider, StyleProvider } from './styles';

export interface AppContext {
    children: React.ReactNode;
}

export default function Context() {
  return (
    <StyleProvider>
      <ColorProvider>
            <App />
      </ColorProvider>
    </StyleProvider>
  );
}