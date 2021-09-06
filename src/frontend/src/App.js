import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';

import { Home } from './pages/Home';
import { Overview } from './pages/Overview';
import { User } from './pages/User';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
  return (
    <React.Fragment>
        <Router>
          {/* <NavigationBar /> */}
          
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/overview" component={Overview} />
              <Route path="/users/:userId" component={User} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>

  );
  }
}

export default App;
