import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Counters from '../components/counter';
import '../css/App.css';


export default  () => {

  const [countersize, setCountersize] = useState(1);

  useEffect(() => {
    document.title = `${countersize} counters`
  });

  return (
    <div className="App">
      <Header />

      <div className="row">
        <input
          type="button"
          className="btn btn-primary"
          onClick={() => setCountersize((prevCounters) => prevCounters + 1)}
          value="Add Counter" />
      </div>

      <div className="container">
        {
          Array.apply(null, { length: countersize })
            .map((item) => <Counters initialCount={0}/> )
        }
      </div>
    </div>
  );
}
