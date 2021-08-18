import React, { useState } from 'react';

export const SettingContext = React.createContext();

function SettingsProvider(props){

  const [displayCount, setDisplayCount] = useState(3);
  const [totalTasks, setTotalTasks] = useState(0);


  const state = {
    displayCount,
    totalTasks,
    setDisplayCount,
    setTotalTasks
  }
 
    return (
      <SettingContext.Provider value={state}>
        {props.children}
      </SettingContext.Provider>
    );
}

export default SettingsProvider;