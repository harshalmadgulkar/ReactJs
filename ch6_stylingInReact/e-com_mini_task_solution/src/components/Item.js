import ItemStyle from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={ItemStyle.container}>
      <h3 className={ItemStyle.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={ItemStyle.image} />
      <p>
        <strong className={ItemStyle.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
