import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { TeamPage } from "./pages/TeamPage";
import { UserPage } from "./pages/UserPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:userId">
            <UserPage />
          </Route>       
          {/* <Route path="/">
            <HomePage />
          </Route>          */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
