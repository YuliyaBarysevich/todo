import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      maxItems: 5,
      showCompletedItems: true,
      startPage: 1
    };
  }
  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
  
}

export default SettingsProvider;