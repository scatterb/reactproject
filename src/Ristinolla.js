import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Peli />
                <a href="#" onClick={reset}>Reset</a>
            </div>

        );
    }
}

class Nelio extends React.Component {
    
    render() {
        return (
            <button className="nelio" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Lauta extends React.Component {
    constructor() {
        super();
        this.state = {
            neliot: Array(9).fill(null),
            xIsNext: true,
        };
    }
    renderNelio(i) {
        return <Nelio value={this.state.neliot[i]} onClick={(   ) => this.handleClick(i)} />;
    }
    render() {
        const voittaja = laskeVoittaja(this.state.neliot);
        let tilanne;
        if(voittaja) {
            tilanne = 'Voittaja: ' + voittaja;
        } else {
            tilanne = 'Seuraava Pelaaja: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
        return (
            <div>
                <h2>RISTINOLLA</h2>
                <div className="tilanne">{tilanne}</div>
                <div className="lauta-rivi">
                    {this.renderNelio(0)}
                    {this.renderNelio(1)}
                    {this.renderNelio(2)}
                </div>
            <div className="lauta-rivi">
                {this.renderNelio(3)}
                {this.renderNelio(4)}
                {this.renderNelio(5)}
            </div>
            <div className="lauta-rivi">
            {this.renderNelio(6)}
            {this.renderNelio(7)}
            {this.renderNelio(8)}
            </div>
            </div>
        );
    }
    handleClick(i) {
  const neliot = this.state.neliot.slice();
  if(laskeVoittaja(neliot) || neliot[i]) {
      return;
  }
  neliot[i] = this.state.xIsNext ? 'X' : 'O';
  this.setState({neliot: neliot, 
  xIsNext: !this.state.xIsNext,
    });
}

}

class Peli extends React.Component {
    render() {
        return (
            <div className="peli">
                <div className="peli-lauta">
                    <Lauta />
                </div>
                <div className="peli-info">
                    <div>{/*status */}</div>
                    <ol>{/*TODO */}</ol>
                    </div>
                </div>
        );
    }
}

/*
ReactDOM.render(
    <Peli />,
    document.getElementById('content')
);*/

function laskeVoittaja(neliot) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(neliot[a] && neliot[a] === neliot[b] && neliot[a] === neliot[c]) {
            return neliot[a];
        }
    }
    return null;
}

function Nelio(props) {
    return (
        <button className="nelio" onClick={() => props.onClick()}>
            {props.value}
            </button>
    );
}

function reset() {
    ReactDOM.render(
    <Peli />,
    document.getElementById('ristinolla')
);
}