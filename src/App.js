import React from 'react';

function Name(props) {
  return <h3>My name is '{props.name}'</h3>
}

function App() {
  //r=eturn <div className="App"/>;
  return (
    <div>
      <h1>Hello</h1>

      <Name name="강성욱"/>
    </div>
  );
}

export default App;