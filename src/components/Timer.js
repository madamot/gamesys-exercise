import styled, { css } from 'styled-components';
import React,{ useState, useEffect } from 'react';


const Time = styled.ul`

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
`;

const Colon = styled.div`
  padding: .5em;
  margin-bottom: 1em;
`;

const Timer = (date) => {


  const calculateTimeLeft = () => {

    let difference = +new Date(date.date) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
     timeLeft = {
       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
       minutes: Math.floor((difference / 1000 / 60) % 60),
       seconds: Math.floor((difference / 1000) % 60)
     };
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
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Time>
  );
};


export default Timer
