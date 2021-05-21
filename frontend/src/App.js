import React from 'react';
import './App.css';
import NavBarTailwind from "./NavBarTailwind";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VirtualTreeComponent from "./VTreeDemo";
import VirtualTreeComponent2 from "./VTreeDemo2";
import {CodeBeautifier} from "./CodeBeautifier";

function App() {
  return (
    <div className="App">
      {/*<NavBarTailwind />*/}
        <Router>


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/tree" component={VirtualTreeComponent} />
                <Route path="/" component={CodeBeautifier} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
