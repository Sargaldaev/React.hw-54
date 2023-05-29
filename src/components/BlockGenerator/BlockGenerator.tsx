import React from 'react';
import { IItem } from '../ArrayGenerator';
import './BlockGenerator.css';

interface IProps {
  items: IItem[];
  onClickHandler: (index: number) => void;
  win: boolean;
};

const BlocksGenerator: React.FC<IProps> = ({ items , onClickHandler, win}) => {
  return (
    <div className="Blocks" style={win ? { pointerEvents: 'none' } : {}}>
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