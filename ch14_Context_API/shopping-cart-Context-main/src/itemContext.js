import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showcart, setShowcart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    // console.log(index);
    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
    } else {
      cart[index].qty++;
      setCart(cart);
    }
    setTotal(total + prod.price);
    setItem(item + 1);
  };

  const handleRemove = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    if (index === -1) {
      alert("This product is not in your cart");
    } else {
      if (cart[index].qty > 1) {
        cart[index].qty--;
      } else {
        cart.splice(index, 1);
      }
      setCart(cart);
    }
    setTotal(total - prod.price);
    setItem(item - 1);
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const toggle = () => {
    setShowcart(!showcart);
  };

  return (
    <itemContext.Provider
      value={{
        handleAdd,
        handleRemove,
        handleReset,
        item,
        total,
        cart,
        toggle,
      }}
    >
      {showcart && <CartModal />}
      {children}
    </itemContext.Provider>
  );
}
export { itemContext, useValue };
export default CustomItemContext;
