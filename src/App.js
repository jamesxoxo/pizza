import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import Menu from './Menu';
import Form from './Form';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Grid>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/about" component={About} />
          </Switch>
        </Grid>
      </div>
    );
  }
}

export default App;
