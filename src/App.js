// MAIN PARENT APP COMPONENT THAT WRAPS AROUND EVERYTHING
import React from 'react';
// can be import React, { Component } from 'react'
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  // so it can be Component not React.Component
  // note: diff components can have their own state, but most of the time you'll have multiple components that need to access a state
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Clean home',
        completed: false
      }
    ]
  }

  // render is a lifecycle method!
  render() {
    console.log(this.state.todos);
    // returns JSX - easier way to write JS for output in the browser
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
