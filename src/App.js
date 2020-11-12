import React, { Component } from "react";
// import { v4 } from "uuid";


class App extends Component {
  state = {
    idValue: 1,
    newText: "",
  
  wrozby: [
    {
      id: 1,
      text: 'Pierwsza wrożba'
    },
    {
      id: 2,
      text: 'Druga wrożba'
    },
    {
      id: 3,
      text: 'Trzecia wrożba'
    },
    {
      id: 4,
      text: 'Czwarta wrożba'
    },
  ]
}
  handleChange = (e) => {
    this.setState({ 
      newText: e.target.value
    })
  }

  add = (newWrozba) => {
    this.setState({ 
      wrozby: [...this.state.wrozby, newWrozba] 
    });
  }

  handleAdd = () => {
    const newWrozba = {
      id: this.state.wrozby.length +1,
      text: this.state.newText
    }
    this.add(newWrozba)    
  }

  find = (id) => {
    const wrozba = this.state.wrozby.find(wrozba => wrozba.id === id)
    this.setState({
      text: wrozba.text
    })
    return wrozba.text
  }

  randomOmen = (min, max) => {
    const value = Math.floor(Math.random() * (max - min)) + min;

    this.setState({
      idValue: value
    })
    this.find(value)
  }

  render() {
    console.log(this.state.wrozby)
    return (
      <>
        <button onClick={() => this.randomOmen(1, this.state.wrozby.length+1)}>Zobacz wróżbę</button>
        <br />
        <input onChange={this.handleChange}></input>
        <button onClick= {this.handleAdd}>Dodaj wróżbę</button>
        <br />
        {this.state.text}
      </>
    )
  }
}
export default App;