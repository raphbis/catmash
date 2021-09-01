// import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  // incrementByAmount,
  // incrementAsync,
  // incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './CatClicker.module.css';

export interface Cat {
  id : string,
  url : string
}

export interface Props {
  cats: Cat[]
}

function getRandomInt(max: number, previousNumber: number = -1) {
  const randomNumber = Math.floor(Math.random() * max + 1);

  if (randomNumber === previousNumber && randomNumber === max)
    return randomNumber - 1;
  else if (randomNumber === previousNumber)
    return randomNumber + 1;
  else
    return randomNumber;
}

const CatClicker = (props: Props) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const rand1 = getRandomInt(props.cats.length);
  let rand2 = getRandomInt(props.cats.length, rand1);

  if (rand1 === rand2)
    rand2++;

  console.log("rand1", props.cats[rand1]);
  console.log("rand2", props.cats[rand2]);
  console.log("rand1, rand2", rand1, rand2);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}

export default CatClicker;