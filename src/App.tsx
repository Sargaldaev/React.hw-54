import React, {useState} from 'react';
import getArray, { IItem } from './components/ArrayGenerator';
import './App.css';
import BlocksGenerator from './components/BlockGenerator/BlockGenerator';
import Counter from './components/Counter/Counter';
import counter from './components/Counter/Counter';

const App = () => {
  const [items, setItems] = useState<IItem[]>(getArray());
  const [count, setCount] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);

  const clickedBlock = (index: number) => {
    const itemsCopy: IItem[] = [...items];
    const itemCopy: IItem = { ...itemsCopy[index] };
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;

    if (itemCopy.hasItem) {
      setWin(true);
    } else {
      setWin(false);
    }

    setCount(count + 1);
    setItems(itemsCopy);
  };

  const clickReset = () => {
    setCount(0);
    setItems(getArray());
    setWin(false);
  }

  return (
    <div className="App">
      {win ? <div className="win">Вы нашли то что искали</div> : null}
      <BlocksGenerator win={win} onClickHandler={clickedBlock} items={items} />

      <div className="counterAndBtn">
        <Counter count={count} />
        <button onClick={clickReset}>reset</button>
      </div>
    </div>
  );
}

export default App;