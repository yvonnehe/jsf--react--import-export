import React from 'react';
import Welcome from './Welcome.js'; 
import Image from './Image.js'; 
import Panel from './Panel.js'; 
import NestedComponentExample from './NestedComponentExample.js'; 

export default function App() {
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