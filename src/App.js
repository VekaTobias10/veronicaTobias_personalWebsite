import  PrincipalPage from './pages/principalpage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/veronicatobias" />
        </Route>
        <Route path="*">
          < PrincipalPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
