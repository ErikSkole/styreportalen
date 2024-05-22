import { set } from 'firebase/database';
import React from 'react';

export const DateContext = React.createContext({
  dateEvent: '',
  setDateEvent: (date: string) => {},
  stedEvent: '',
  setStedEvent: (sted: string) => {},
});