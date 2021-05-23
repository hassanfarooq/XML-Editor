import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VirtualTreeComponent from "./VTreeDemo";
// import VirtualTreeComponent2 from "./VTreeDemo2";
import {CodeBeautifier} from "./CodeBeautifier";
import { useFullScreenHandle } from "react-full-screen";
function App() {
    const handle = useFullScreenHandle();

  return (
    <div className="App">


      {/*<NavBarTailwind />*/}
        <Router>



            <Switch>
                <Route path="/tree" component={VirtualTreeComponent} />
                <Route path="/"
                       render={(props) => <CodeBeautifier handleFull={handle} {...props} />} />
            </Switch>
        </Router>


    </div>
  );
}

export default App;
