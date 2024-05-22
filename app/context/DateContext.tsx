import React from 'react';

export const DateContext = React.createContext({
  dateEvent: '',
  setDateEvent: (date: string) => {},
});