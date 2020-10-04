import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  )
}
