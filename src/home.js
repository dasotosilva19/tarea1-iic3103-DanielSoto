import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BreakingBadSerie } from "./breakingBad.js"
import { BetterCallSaul } from "./betterCallSaul.js"
import {EpisodiosBB} from "./episodiosBB.js";
import {EpisodiosBCS} from "./episodiosBCS.js";
import { DescripcionCapituloBB } from './descripcionCapituloBB'; 
import { DescripcionCapituloBCS } from './descripcionCapituloBCS'; 

export function Home() {
  return (
    <Router>
      <h1>TAREA 1</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/breakingbad">Breaking Bad</Link>
            </li>
            <li>
              <Link to="/bettercallsaul">Better Call Saul</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/breakingbad" exact component={BreakingBadSerie} />
        <Route path="/bettercallsaul" exact component={BetterCallSaul} />
        <Route path="/breakingbad/:numTemp" exact component={EpisodiosBB} />
        <Route path="/bettercallsaul/:numTemp" exact component={EpisodiosBCS} />
        <Route path="/breakingbad/capitulos/:numCap" exact component={DescripcionCapituloBB} />
        <Route path="/bettercallsaul/capitulos/:numCap" exact component={DescripcionCapituloBCS} />
      </Switch>
    </Router>
  )
}
