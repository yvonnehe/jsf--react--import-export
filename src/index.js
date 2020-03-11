import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './css/index.css';


ReactDOM.render(<App />, document.getElementById('root'));


function App() {
    return (
        <div className="App">
            <Welcome name="Noroff" />
  
            <Image source="https://placedog.net/500/280" altText="Doggo" />
  
            <Panel heading="My panel box">
                <p>This content is inside the panel element.</p>
                <p>I can place whatever I want in here.</p>
            </Panel>
  
            <NestedComponentExample />
        </div>
    );
}
  
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
function Image(props) {
    return (
        <img src={props.source} alt={props.altText} />
    );
}
  
function Panel(props) {
    return (
        <div className="panel">
            <h2 className="panel__heading">{props.heading}</h2>
            <div className="panel__content">
                {props.children}
            </div>
        </div>
    );
}
  
function NestedComponentExample(props) {
    return (
        <Panel heading="Component with nested components">
            <Image source="https://placedog.net/500/280/random" alt="Random dog" />
        </Panel>
    );
}