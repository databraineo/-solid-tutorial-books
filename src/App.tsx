import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

function HelloWorld() {
  return <div>Hello You!</div>;
}

const App: Component = () => {
  const name = 'Holger';
  const my_style = {
    'background-color': '#ef007f',
    color: '#FFF',
    margin: '20px',
    padding: '30px',
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <div style="background-color: #2c4f7c; color: #FFF;padding: 20px;">
          <h1>Welcome</h1>
          <HelloWorld />
        </div>
        <div style={my_style}>Hello {name}!</div>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
