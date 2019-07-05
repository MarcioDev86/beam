import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Troubleshooting from './components/pages/Troubleshooting';
import PageNotFound from './components/pages/PageNotFound';
import Navigation from './components/layout/Navigation';
import Privacy from './components/pages/Privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/troubleshooting" component={Troubleshooting} />
          <Route exact path='/privacy' component={Privacy} />
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

/*

        <section className="sec4">
          <DirectCodeEntry />
        </section>

        <section className="sec5">
          <AudoCodeEntry />
        </section>

*/

/*
right algin
margin-left: 100% auto;
  margin-right: 0% auto;
*/