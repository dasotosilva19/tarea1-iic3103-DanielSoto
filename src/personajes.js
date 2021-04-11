import React from 'react';
import { Link } from 'react-router-dom';

export class Personajes extends React.Component{
  constructor(props) {
    super(props);
    this.state = { personaje: [], comentarios: [], loading: true, };
  }

  componentDidMount() {

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters?name='+this.props.match.params.idPers)
        .then(response => response.json())
        .then(personajeJson => {this.setState(
            { personaje: personajeJson, loading: false, }, 
            () => console.log(this.state))});
    
    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/quote?author='+this.props.match.params.idPers)
        .then(response => response.json())
        .then(comentariosJson => {this.setState(
            { comentarios: comentariosJson, }, 
            () => console.log(this.state))});        
  }

  render(){

    const character = this.state.personaje.map(pers => (
      <div style={{color: 'white'}} align='center'>
        <h1> Personajes </h1>
        <ul>
          <img src={pers.img} width ="150" hight="100" />
        </ul>
        <ul><p>Nombre: {pers.name}</p></ul>
        <ul>Estado: {pers.status}</ul>
        <ul>Sobrenombre: {pers.nickname}</ul>
        <ul>Actor: {pers.portrayed}</ul>
        <ul>Ocupación :{pers.occupation.map(ocup =>(
          <ul>{ocup}</ul>
        ))}</ul>
        <ul>Temporadas Breaking Bad: {pers.appearance.map(app => (
          <Link style={{textDecoration: 'none', color: 'gold'}}
          to={{pathname: "/breakingbad/"+app}}>{app} </Link>
        ))}</ul>
        <ul>Temporadas Better Call Saul: {pers.better_call_saul_appearance.map(app => (
          <Link style={{textDecoration: 'none', color: 'gold'}}
          to={{pathname: "/bettercallsaul/"+app}}>{app} </Link>
        ))}</ul>
        <ul>citas: {this.state.comentarios.map(com => (
          <ul>-{com.quote}</ul>
        ))}</ul>
      </div>
    ))

    return <p>{character}</p>
  }
}
