import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function Thing({ items, heading, onSelectItem }: Props) {
  const [isAlert, setIsAlert] = useState(false);
  const [currentItem, setCurrentItem] = useState(-1);
  function startAlert(index: number) {
    setIsAlert(true);
    setCurrentItem(index);
  }
  return (
    <>
      {isAlert && (
        <Alert onClick={() => setIsAlert(false)}>{items[currentItem]}</Alert>
      )}
      <h1>{heading}</h1>
      {items.length === 0 && <p>peratty empty</p>}
      <ul className="list-group">
        {items.map((idk, index) => (
          <Button
            key={idk}
            onClick={() => {
              onSelectItem(idk);
              startAlert(index);
            }}
          >
            {idk}
          </Button>
        ))}
      </ul>
    </>
  );
}

export default Thing;
