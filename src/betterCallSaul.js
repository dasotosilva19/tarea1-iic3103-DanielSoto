import React from 'react';

export class BetterCallSaul extends React.Component {
    constructor(props){
        super(props);

        this.state = {BetterCallSaulTemporadas: [], loading: true, }
    }

    componentDidMount() {

        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
            .then(response => response.json())
            .then(temporadasBBJson => {this.setState(
                { BetterCallSaulTemporadas: temporadasBBJson, loading: false, }, 
                () => console.log(this.state))});
    }


    render (){


        const temporadasBCS = [];

        this.state.BetterCallSaulTemporadas.map(cap => (
            temporadasBCS.push(cap.season)
        ))

        const temporadasBCS2 = temporadasBCS.filter((cap, index) => {
            return temporadasBCS.indexOf(cap) === index;
        })

        const numTemporadasBCS = temporadasBCS2.map(cap => (
          <li>
            Temporada {cap}
          </li>
        ))

        return (
            <div>
                <div>
                <h1>Better Call Saul</h1>
                </div>

                <div>
                    <p>{numTemporadasBCS}</p>
                </div>
            </div>

        );
    }
}