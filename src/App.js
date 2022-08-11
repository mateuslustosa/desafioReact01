import React, {Component} from 'react';

export default class App extends Component{

  state = {
    nome:"Mateus",
    idade: 25,
    comidaFavorita: "Strogonoff",
    musicas: ["Pagode, Rap, MPB"]
  }

  render(){
    return(
      <div>
        <h1>nome: {this.state.nome}</h1>
        <h2>idade: {this.state.idade}</h2>
        <h3>Comida favorita: {this.state.comidaFavorita}</h3>
        <ul>
          <li>Músicas: {this.state.musicas}</li>
        </ul>
      </div>
    )
  }
}