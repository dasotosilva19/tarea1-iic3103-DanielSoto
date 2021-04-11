import React from 'react';
import { withRouter } from 'react-router-dom';

class Autocompletar extends React.Component {
  constructor(props){
    super(props);
    this.items = ['Jesse Pinkman']

    this.state = {personajes: [], suggestions: [], text: '', }
  }

  /*componentDidMount() {

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(personajeJson => {this.setState(
            { personajes: personajeJson, loading: false, }, 
            () => console.log(this.state))});
           
  }*/

  onTextChanged = (e) => {

    const value = e.target.value;

    fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(personajeJson => {this.setState(
            { personajes: personajeJson, loading: false, }, 
            () => console.log(this.state))});
    
    const listaPers = []

    this.state.personajes.map(pers => (
      listaPers.push(pers.name)
    ))

    this.items = listaPers;

    console.log(this.items)
           
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }

    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))

    const arrayNombre = value.split(" ")
    console.log(arrayNombre)
    let paramNombre = ""
    for (var i = 0; i<arrayNombre.length; i++) {
      if (i === 0){
        paramNombre = paramNombre + arrayNombre[i]
      } else {
        paramNombre = paramNombre + "+"+arrayNombre[i]
      }
    }

    const ruta = "/personajes/"+paramNombre

    this.props.history.push(ruta)
  }

  renderSuggestions () {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      suggestions.map(pers => (
        <lu>
          <li onClick={() => this.suggestionSelected(pers)}>{pers}</li>
        </lu>
      ))
    )
  }

  render(){

    /*const listaPers = []

    this.state.personajes.map(pers => (
      listaPers.push(pers.name)
    ))

    this.items = listaPers;*/

    const { text } = this.state;
    return (
      <div>
        <h3 color="white">Buscador de Personajes</h3>
        <input value={text} onChange={this.onTextChanged} type="Nombre del personaje" />
        {this.renderSuggestions()}
      </div>
    )
  }
}

export default withRouter(Autocompletar)