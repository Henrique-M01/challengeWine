import { useState } from 'react';
import MainContext from './MainContext';

function MainContextProvider({ children }: any) {
  const [actualPage, setActualPage] = useState(1);

  const value = { actualPage, setActualPage };

  return (
    <MainContext.Provider value={ value } >
      { children }
    </MainContext.Provider>
  )
};

export default MainContextProvider;
