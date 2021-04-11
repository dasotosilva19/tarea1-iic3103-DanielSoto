import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BreakingBadSerie } from "./breakingBad.js"
import { BetterCallSaul } from "./betterCallSaul.js"
import {EpisodiosBB} from "./episodiosBB.js";
import {EpisodiosBCS} from "./episodiosBCS.js";
import { DescripcionCapituloBB } from './descripcionCapituloBB'; 
import { DescripcionCapituloBCS } from './descripcionCapituloBCS';
import { Personajes } from './personajes.js';
import Autocompletar from './autocompletar.js';
import './home.css'


export function Home() {

  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters').then((response) => {
      return response.json()
    }).then((res) => {
      for (var i = 0; res.data.length; i++) {
        myOptions.push(res.data[i].name)
      }

      setMyOptions(myOptions)
    })
  }

  return (
    <Router>
      <body>
        <h1 align="center">TAREA 1</h1>
        <div>
          <nav>
            <ul className='barra'>
              <font color="white">
                <h3>Elige una Serie:</h3>
                <li display='inline-block'>
                  <Link style={{textDecoration: 'none', color: 'white', background: 'green', border: '1px solid'}}
                   to="/breakingbad">Breaking Bad</Link>
                </li>
                <li display='inline-block'>
                  <Link style={{textDecoration: 'none', color: 'white', background: 'green', border: '1px solid'}}
                   to="/bettercallsaul">Better Call Saul</Link>
                </li>
                <Autocompletar />
                </font>
            </ul>
          </nav>
        
        </div>
      </body>

      <Switch>
        <Route path="/breakingbad" exact component={BreakingBadSerie} />
        <Route path="/bettercallsaul" exact component={BetterCallSaul} />
        <Route path="/breakingbad/:numTemp" exact component={EpisodiosBB} />
        <Route path="/bettercallsaul/:numTemp" exact component={EpisodiosBCS} />
        <Route path="/breakingbad/capitulos/:numCap" exact component={DescripcionCapituloBB} />
        <Route path="/bettercallsaul/capitulos/:numCap" exact component={DescripcionCapituloBCS} />
        <Route path="/personajes/:idPers" exact component={Personajes} />
      </Switch>
    </Router>
  )
}
