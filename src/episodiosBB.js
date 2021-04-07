import React from 'react';

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
      <li>{index+1+"- "} {cap.title}</li>
    ))


    return (
      <div>
        <h1>Capitulos Breaking Bad temporada {this.props.match.params.numTemp}</h1>
        <p>{capTemporadaBB}</p>
      </div>
    );
  }
}