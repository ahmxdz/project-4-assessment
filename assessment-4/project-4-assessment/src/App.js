import React, {useState} from 'react';
import './App.css';
import CircleSelector from '../src/components/CircleSelector/CircleSelector';
import Circles from '../src/components/Circles/Circles'

function App(props) {

  const [circleSelector1, setCircleSelector1] = useState(false);
  const [circleSelector2, setCircleSelector2] = useState(false);
  const [circleSelector3, setCircleSelector3] = useState(false);
  const [circleSelector4, setCircleSelector4] = useState(false);

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          
          <CircleSelector 
          circleSelector1={circleSelector1}
          circleSelector2={circleSelector2}
          circleSelector3={circleSelector3}
          circleSelector4={circleSelector4}
          setCircleSelector1={setCircleSelector1}
          setCircleSelector2={setCircleSelector2}
          setCircleSelector3={setCircleSelector3}
          setCircleSelector4={setCircleSelector4}
          />
          <Circles 
          circleSelector1={circleSelector1}
          circleSelector2={circleSelector2}
          circleSelector3={circleSelector3}
          circleSelector4={circleSelector4}
          setCircleSelector1={setCircleSelector1}
          setCircleSelector2={setCircleSelector2}
          setCircleSelector3={setCircleSelector3}
          setCircleSelector4={setCircleSelector4}
          />
        </main>
      </div>
    );
}


export default App;