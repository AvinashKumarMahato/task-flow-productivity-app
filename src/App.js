import React from 'react';
import Header from './components/Header';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Clock />
        <TodoList />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
