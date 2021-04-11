import React from 'react';
import { Link } from 'react-router-dom';


export class BreakingBadSerie extends React.Component {
  constructor(props){
      super(props);

      this.state = {breakingBadTemporadas: [], loading: true, }
  }

  componentDidMount() {

      fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
          .then(response => response.json())
          .then(temporadasBBJson => {this.setState(
              { breakingBadTemporadas: temporadasBBJson, loading: false, }, 
              () => console.log(this.state))});
  }


  render (){

      const temporadasBB = [];

      this.state.breakingBadTemporadas.map(cap => (
          temporadasBB.push(cap.season)
      ))

      const temporadasBB2 = temporadasBB.filter((cap, index) => {
          return temporadasBB.indexOf(cap) === index;
      })

      const numTemporadasBB = temporadasBB2.map(cap => (
        <li>
            <Link style={{textDecoration: 'none', color: 'white'}}
            to={{pathname: "/breakingbad/"+cap}}>Temporada {cap}</Link>
        </li>
      ))

      return (
          <div align="center">
              <div>
              <h1>Breaking Bad</h1>
              </div>
              <div>
                  <p>{numTemporadasBB}</p>
              </div>
          </div>

      );
  }
}