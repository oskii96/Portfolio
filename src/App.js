import React from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

function App() {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
