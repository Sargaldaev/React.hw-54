export interface IItem {
  hasItem: boolean;
  clicked: boolean;
}

const getArray = () => {
  const arr: IItem[] = [];

  for (let i:number = 0; i < 36; i++) {
    arr.push( { hasItem: false, clicked: false } );
  }

  arr[Math.floor(Math.random() * 36 - 0)].hasItem = true;

  return arr;
}

export default getArray;