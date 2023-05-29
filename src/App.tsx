import React, {useState} from 'react';
import getArray, { IItem } from './components/ArrayGenerator';
import './App.css';
import BlocksGenerator from './components/BlockGenerator/BlockGenerator';

const App = () => {
  const [items, setItems] = useState<IItem[]>(getArray());

  const clickedBlock = (index: number) => {
    const itemsCopy: IItem[] = [...items];
    const itemCopy: IItem = { ...itemsCopy[index] };
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;

    setItems(itemsCopy);
  };

  return (
    <div className="App">
      <BlocksGenerator onClickHandler={clickedBlock} items={items} />
    </div>
  );
}

export default App;