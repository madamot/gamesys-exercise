import React,{ useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
    })
    .then(function(response) {
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {data.offer ?
          <div>
            <img src={data.offer.headerOneX} alt="" />
            <h3>{data.offer.title}</h3>
          </div>
            : <p>Loading...</p>
        }
      </header>

      <div className="App">


      </div>
    </div>
  );
}

export default App;
