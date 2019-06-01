import * as React from 'react';

import HomePage from 'pages/HomePage';
import TopNav from 'components/TopNav';
import 'assets/scss/main.scss';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <TopNav></TopNav>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
