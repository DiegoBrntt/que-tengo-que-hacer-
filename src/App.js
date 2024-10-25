import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import NewTaskButton from './components/NewTaskButton.comoponent';
import Table from './components/Table.comoponent ';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1 className="title">Gestor de Tareas</h1>
        <NewTaskButton />
        <Table />
      </div>
    );
  }
}

export default App;
