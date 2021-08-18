import React from 'react';
import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/context.js'


function App () {
  return (
    <SettingsProvider>
      
        <ToDo />
      
    </SettingsProvider>  
  )
}

export default App;