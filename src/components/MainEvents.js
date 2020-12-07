import React, { useEffect, useState } from 'react';
import './Events.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Description from './Description';
import Home from './Home';

function MainEvents() {
  const [appState, setAppState] = useState({ events: [] });
  const [descriptions, setDescriptions] = useState({ description: false });
  const [showBets, setShowBet] = useState({ showBet: false });

  useEffect(() => {
    const apiUrl = 'https://react-evver.firebaseio.com/event.json';
    axios.get(apiUrl).then((resp) => {
      const even = resp.data;
      setAppState({ events: even });
    });
  }, [setAppState]);

  function addDescription(event) {
    setDescriptions({ description: event });
  }

  function makeBet(selectBet) {
    setShowBet({ showBet: selectBet.selectBet });
    const select = selectBet.selectBet;
    select.click = false;
    setTimeout(() => {
      setShowBet({ showBet: false });
    }, 3000);
  }

  return (
    <div>

      <div />
      <Switch>
        <Route exact path="/" render={() => <Home showBet={showBets.showBet} events={appState.events} addDescription={addDescription} descriptions={descriptions.description} />} />
        <Route path="/descriptions" render={() => <Description descriptions={descriptions.description} makeBet={makeBet} />} />
      </Switch>
    </div>
  );
}

export default MainEvents;
