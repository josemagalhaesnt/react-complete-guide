import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "José", age: 24 },
      { name: "Cintia", age: 25},
      { name: "Anderson", age: 21}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "José", age: 24 },
        { name: event.target.value, age: 25},
        { name: "Anderson", age: 21}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div className="list">

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} />
          })}

        </div>
      );
    }
    

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>Switch Name</button>

        { persons }

      </div>
    );
  }
}

export default App;
