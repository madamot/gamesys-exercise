import styled, { css } from 'styled-components';
import React,{ useState, useEffect } from 'react';


const Time = styled.ul`
  padding: 0;
  margin: 0;
  display: inline;

`;

const Interval = styled.li`
  list-style: none;
  display: inline;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: inline-block;
`;

const Unit = styled.div`
  padding: 1em;

  @media (max-width: 440px) {
    padding: .2em;
  }
`;

const Colon = styled.div`
  margin-bottom: 1em;
`;

const Timer = ({date, timerFinished}) => {


  const calculateTimeLeft = () => {

    let difference = +new Date(date) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
     timeLeft = {
       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
       minutes: Math.floor((difference / 1000 / 60) % 60),
       seconds: Math.floor((difference / 1000) % 60)
     };
   } else {
     timerFinished(true);
   }

   return timeLeft;
  }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

    }, [timeLeft]);



    const timerComponents = [];


    Object.keys(timeLeft).forEach((interval, index, arr) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <Container>
          <Divider>
            <Interval>

              <Unit>
                <h1>{timeLeft[interval]}</h1>
                <div>
                  {interval}
                </div>
              </Unit>

            </Interval>
            <Colon>
              {
                index == arr.length - 1 ? (
                  <div></div>
                ) : (
                  ':'
                )
              }

            </Colon>
          </Divider>
        </Container>
      );
    });




  return (
    <Time>
      {timerComponents.length ? timerComponents : <h1>00 : 00 : 00</h1>}
    </Time>
  );
};


export default Timer
