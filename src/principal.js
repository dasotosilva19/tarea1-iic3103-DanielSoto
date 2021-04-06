import React from 'react';
import './principal.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Temporadas } from "./temporadas.js"

export class Series extends React.Component {
    constructor(props){
        super(props);

        this.state = {breakingBadTemporadas: [], BetterCallSaulTemporadas: [], loading: true, }
    }

    componentDidMount() {

        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
            .then(response => response.json())
            .then(temporadasBBJson => {this.setState(
                { breakingBadTemporadas: temporadasBBJson, loading: false, }, 
                () => console.log(this.state))});

        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
            .then(response => response.json())
            .then(temporadasBBJson => {this.setState(
                { BetterCallSaulTemporadas: temporadasBBJson, loading: false, }, 
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
            <Router> 
                <ul>
                    <li>
                        <Link to='/temporadas'>Temporada {cap}</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/temporadas' component={Temporadas} />
                </Switch>
            </Router>
        ))

        const temporadasBCS = [];

        this.state.BetterCallSaulTemporadas.map(cap => (
            temporadasBCS.push(cap.season)
        ))

        const temporadasBCS2 = temporadasBCS.filter((cap, index) => {
            return temporadasBCS.indexOf(cap) === index;
        })

        const numTemporadasBCS = temporadasBCS2.map(cap => (
            <Router> 
                <ul>
                    <li>
                        <Link to='/temporadas'>Temporada {cap}</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/temporadas' component={Temporadas} />
                </Switch>
            </Router>
        ))

        return (
            <div className="principal-header">
                <div className="titulo">
                <h1>Tarea 1</h1>
                </div>
                <div className="breaking-bad">
                    <h1>Breaking Bad</h1>
                    <p>{numTemporadasBB}</p>
                </div>

                <div className="better-call-saul">
                    <h1>Better Call Saul</h1>
                    <p>{numTemporadasBCS}</p>
                </div>
            </div>

        );
    }
}

export default Series;