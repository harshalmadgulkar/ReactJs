import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((i) => (
        <ItemCard key={i.id} id={i.id} name={i.name} price={i.price} />
      ))}
    </div>
  );
}

export default Items;