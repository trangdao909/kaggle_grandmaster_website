import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';

import { Home } from './pages/Home';
import { KaggleOverview } from './pages/KaggleOverview';
import { User } from './pages/User';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/JumbotronComp';

class App extends Component {
  render() {
  return (
    <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/overview" component={KaggleOverview} />
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
