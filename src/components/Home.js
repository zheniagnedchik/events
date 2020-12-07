import React from 'react';
import './Events.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function Home(props) {
  const propHome = props;
  return (
    <div>
      <div className={classnames({ showBet: propHome.showBet })}>
        { propHome.showBet ? ['Ваша стака [', propHome.showBet.title, '] на команду [', propHome.descriptions.title, '] Принята'] : '' }
      </div>
      <h1 className="homeTitle">Список событий</h1>
      <ul className="border">
        {
              propHome.events.map((event) => (
                <Link
                  to="/descriptions"
                  key={event.id}
                  onClick={() => propHome.addDescription(event)}
                >
                  <li className="test">{event.title}</li>
                </Link>
              ))
            }

      </ul>
    </div>
  );
}

export default Home;
