import React from 'react';

export class DescripcionCapituloBB extends React.Component {
  constructor(props) {
    super(props);
    this.state = { capitulo: [], }
  }

  componentDidMount() {

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes/'+this.props.match.params.numCap)
        .then(response => response.json())
        .then(capituloJson => {this.setState(
            { capitulo: capituloJson, loading: false, }, 
            () => console.log(this.state))});
}

  render() {

    const descripcionCapitulo = this.state.capitulo.map(cap => (
      <div>
        <ul>Título: {cap.title}</ul>
        <ul>Temporada: {cap.season}</ul>
        <ul>Episodio: {cap.episode}</ul>
        <ul>Fecha de emisión: {cap.air_date}</ul>
        <ul>Personajes: {cap.characters.map(pers => (
          <ul>{pers}</ul>
        ))}</ul>
      </div>
    ))

    return (
      <div>
        <h1>Breaking Bad</h1>
        {descripcionCapitulo}
      </div>
    )
  }
}