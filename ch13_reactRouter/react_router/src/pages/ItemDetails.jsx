import { useParams } from "react-router-dom";
import {ITEMS} from '../data/itemData'

function ItemDetails() {
  const {id} = useParams();
  const item  = ITEMS.find(i => i.id === id);
  return (
    <>
      <main>
        <h1>Item Details Page</h1>
      </main>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
    </>
  );
}

export default ItemDetails;