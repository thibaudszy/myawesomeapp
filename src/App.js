import React from 'react';
function Hello(){
  return <h1> Hello </h1>
}
function Greeting (props){
  return <div>
    <Hello />
    {props.name}!
  </div>
}
function App() {
  return (
    <div>
      <div>
        <Greeting name='Thibaud' />
      </div>
      <div>
        <Greeting name='yall'/>
      </div>
    </div>
    )
}

export default App;
