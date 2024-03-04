import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import ParticleBg from '../components/ParticleBg';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {};

const originalColors = [
  '#ff5f45',
  '#0798ec',
  '#fc6c7c',
  '#435b71',
  'orange',
  'blue',
  'purple',
  'yellow',
];

const originalPages = [
  { text: 'Section 1' },
  { text: 'Section 2' },
  { text: 'Section 3' },
  { text: 'Section 4' },
  { text: 'Section 5' },
];

export default function App() {
  const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  const [fullpages, setFullpages] = useState(originalPages);

  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  const Menu = () => (
    <div
      className="menu"
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className="actions">
        <li>
          <button onClick={() => {}}> Section1</button>
          <button onClick={() => {}}> Section2</button>
          <button onClick={() => {}}> Section3</button>
          <button onClick={() => {}}> Section4</button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Menu />
      <ParticleBg />
      {/* <ReactFullpage
        navigation
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        // scrollHorizontally = {true}
        sectionsColor={sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>section1</h1>
            </div>
            <div className="section">
              <h1>section2</h1>
            </div>
            <div className="section">
              <h1>section3</h1>
            </div>
            <div className="section">
              <h1>section4</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      /> */}
    </div>
  );
}
