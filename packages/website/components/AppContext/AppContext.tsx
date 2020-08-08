import React from 'react';

interface AppContextProps {
  messages?: string[];
}

export const AppContext = React.createContext<AppContextProps>({
  messages: [],
});

export default AppContext;
