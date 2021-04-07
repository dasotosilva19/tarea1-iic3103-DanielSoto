import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export class EpisodiosBB extends React.Component {
  constructor(props) {
    super(props);
    this.state = { capitulos: [], }
  }

  componentDidMount() {

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
        .then(response => response.json())
        .then(capitulosJson => {this.setState(
            { capitulos: capitulosJson, loading: false, }, 
            () => console.log(this.state))});
}

  render(){

    const capTemporada = [];
    this.state.capitulos.map(cap => (
      (cap.season === this.props.match.params.numTemp) ? capTemporada.push(cap) : null
    ))

    console.log(capTemporada.length)
    const capTemporadaBB = capTemporada.map((cap, index) => (
      <Link to={{pathname: "/breakingbad/capitulos/"+cap.episode_id}}>
        <li>{index+1+"- "} {cap.title}</li>
      </Link>
    ))


    return (
      <div>
        <h1>Capitulos Breaking Bad temporada {this.props.match.params.numTemp}</h1>
        <p>{capTemporadaBB}</p>
      </div>
    );
  }
}