import * as React from 'react';

import HomePage from 'pages/HomePage';
import 'assets/scss/main.scss';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
