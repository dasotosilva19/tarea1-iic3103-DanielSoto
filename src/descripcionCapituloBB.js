import React from 'react';
import { Link } from 'react-router-dom';

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

    const listaPersonajes = [];

    const cadenaArray = [];

    this.state.capitulo.map(cap => ( 
      cap.characters.map(personaje => (
        cadenaArray.push(personaje.split(" "))
      ))
    ))


    for (let i = 0; i < cadenaArray.length; i++){
      var nombre_personaje = "";

      for (let j = 0; j < cadenaArray[i].length; j++){
        if (j === 0){
          nombre_personaje = nombre_personaje+cadenaArray[i][j];
        } else {
          nombre_personaje = nombre_personaje+"+"+cadenaArray[i][j];
        }
      }

      listaPersonajes.push(nombre_personaje);
    }

    const descripcionCapitulo = this.state.capitulo.map(cap => (
      <div>
        <ul>Título: {cap.title}</ul>
        <ul>Temporada: {cap.season}</ul>
        <ul>Episodio: {cap.episode}</ul>
        <ul>Fecha de emisión: {cap.air_date}</ul>
        <ul>Personajes: {cap.characters.map((pers, index) => (
          <ul>
            <Link style={{textDecoration: 'none', color: 'gold'}}
            to={{pathname: "/personajes/"+listaPersonajes[index]}}>{pers}</Link>
          </ul>
        ))}</ul>
      </div>
    ))

    return (
      <div align='center' style={{color: 'white'}}>
        <h1>Breaking Bad</h1>
        {descripcionCapitulo}
      </div>
    )
  }
}