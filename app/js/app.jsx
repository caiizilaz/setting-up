import React, { Component } from 'react';
import Menu from './components/Global/Menu';
import Counter from './components/Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Counter />
      </div>
    );
  }
}