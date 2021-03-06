import React,{ useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Button from './components/Button'
import Timer from './components/Timer'

const Container = styled.div`
  text-align: center;
  background-image: url(${props => props.background.backgroundOneX});
  background-position: center center;
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

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {

    background-image: url(${props => props.background.backgroundTwoX});

  }
`;

const Banner = styled.div`
  display: flex;
  background-image: url(${props => props.banner.headerOneX});
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  ${'' /* background-size: cover; */}
  min-width: 100%;
  height: 10em;

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {

    background-image: url(${props => props.banner.headerTwoX});

  }
`;

const Header = styled.div`
  text-align: center;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function App() {
  const [data, setData] = useState([]);

  const [timerState, setTimerState] = useState(false);

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

  function timerFinished(value) {
    setTimerState(value)
  }




  return (
    <div>
      {data.offer ?
        <Container background={data.offer.background}>
          <Header className="App-header">
            <div style={{width:'80%'}}>
              {timerState ? (
                <div>
                  <Timer date={data.offer.date} timerFinished={timerFinished} />
                </div>
              ) : (
                <>
                  <Banner banner={data.offer.header} alt="" />
                  <h3>{data.offer.title}</h3>
                  <div>
                    <Timer date={data.offer.date} timerFinished={timerFinished} />
                  </div>
                  <Button primary size={data.offer.button.size} label={data.offer.button.label} onClick={() => window.open(`${data.offer.button.url}`, '_blank')}/>
                </>
              )}
            </div>
          </Header>
        </Container>
      : <p>Loading...</p>
      }

    </div>

  );
}

export default App;
