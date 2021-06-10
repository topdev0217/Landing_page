import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './global/style.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
