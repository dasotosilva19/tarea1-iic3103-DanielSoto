import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export class Personajes extends React.Component{
  constructor(props) {
    super(props);
    this.state = { personaje: [], loading: true, };
  }

  componentDidMount() {

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters?name='+this.props.match.params.idPers)
        .then(response => response.json())
        .then(personajeJson => {this.setState(
            { personaje: personajeJson, loading: false, }, 
            () => console.log(this.state))});
  }

  render(){

    const character = this.state.personaje.map(pers => (
      <div>
        <ul>
          <img src={pers.img} width ="150" hight="100" />
        </ul>
        <ul>Nombre: {pers.name}</ul>
        <ul>Estado: {pers.status}</ul>
        <ul>Sobrenombre: {pers.nickname}</ul>
        <ul>Actor: {pers.portrayed}</ul>
        <ul>Ocupación :{pers.occupation.map(ocup =>(
          <ul>{ocup}</ul>
        ))}</ul>
        <ul>Temporadas Breaking Bad: {pers.appearance.map(app => (
          <Link to={{pathname: "/breakingbad/"+app}}>{app} </Link>
        ))}</ul>
        <ul>Temporadas Better Call Saul: {pers.better_call_saul_appearance.map(app => (
          <Link to={{pathname: "/bettercallsaul/"+app}}>{app} </Link>
        ))}</ul>
      </div>
    ))

    return <p>{character}</p>
  }
}
