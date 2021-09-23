import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom"
import { HUD} from "./components/HUD"
import Registration from './components/auth/pages/Registration';
import { SelectSlot } from './components/auth/pages';

function App() {
  return (
    <>
    <HashRouter path='/auth'>
      <Switch>
        <Route path='/auth/registration' component={Registration}/>
        <Route path='/auth/select_slot' component={SelectSlot}/>
      </Switch>
    </HashRouter>
    <HUD/>
    </>
  );
}

export default App