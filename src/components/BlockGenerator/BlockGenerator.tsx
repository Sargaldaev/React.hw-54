import React from 'react';
import { IItem } from '..//ArrayGenerator';
import './BlockGenerator.css';

interface IProps {
  items: IItem[];
  onClickHandler: (index: number) => void;
};

const BlocksGenerator: React.FC<IProps> = ({ items , onClickHandler}) => {
  return (
    <div className="Blocks">
      {
        items.map((item: IItem, index: number) => {
          return (
            <div
              onClick={() => onClickHandler(index)}
              key={index}
              className={`Block ${item.clicked ? 'ClickedBlock' : null}`}
            >
              { item.hasItem ? 'O' : null }
            </div>
          )
        })
      }
    </div>
  );
};

export default BlocksGenerator;