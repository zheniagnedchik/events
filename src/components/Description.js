import React, { useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import clock from './clock.png';

function Descriptions(props) {
  const prop = props;
  const { descriptions } = prop;
  const { coefficient } = descriptions;
  const [selectBets, setSelectBet] = useState({ selectBet: false });

  function ActiveBet(coeff) {
    const coef = coeff;
    coef.click = true;
    setSelectBet({ selectBet: coeff });
  }

  return (
    <div className="dceriptionContainer">
      <h1 className="descriptionTitle">
        {descriptions.title}
      </h1>
      <div className="clockContainer">
        <div style={
            {
              backgroundImage: `url(${clock})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '20px', height: '20px',
            }

         }
        />
        <div className="clockTitle">
          { descriptions.data }
        </div>
      </div>

      <ul className="btnBetContainer">
        {coefficient.map((coeff) => (
          <li
            key={coeff.title}
          >
            <button
              type="submit"
              className={classnames('btnBet', { btnBetActive: !!coeff.click })}
              disabled={!!selectBets.selectBet.click}
              onClick={() => ActiveBet(coeff)}
            >
              {' '}
              { coeff.title }
            </button>
          </li>
        ))}
      </ul>
      <div className="make">
        <Link to="/">
          <button
            type="submit"
            className="makeBet"
            onClick={() => props.makeBet(selectBets)}
            disabled={!selectBets.selectBet}
          >
            Сделать ставку
          </button>
        </Link>
      </div>

    </div>

  );
}

export default Descriptions;
