import React,{ useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Button from './components/Button'
import Timer from './components/Timer'

const Container = styled.div`
  text-align: center;
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  object-fit: contain;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = styled.div`
  text-align: center;
`;


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      getData()
  }, []);


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






  return (
    <div>
      {data.offer ?
        <Container background={data.offer.backgroundTwoX}>
          <Header className="App-header">
            <div>
              <img src={data.offer.headerOneX} alt="" />
              <h3>{data.offer.title}</h3>
              <div>
                <Timer date={data.offer.date} />
              </div>
              <Button primary size={data.offer.button.size} label={data.offer.button.label} onClick={() => window.open(`${data.offer.button.url}`, '_blank')}/>
            </div>
          </Header>
        </Container>
      : <p>Loading...</p>
      }

    </div>

  );
}

export default App;
