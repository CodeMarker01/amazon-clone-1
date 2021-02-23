import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

import "./Subtotal.css";

function Subtotal() {
  //State
  const [{ basket }, dispatch] = useStateValue();
  //Selector
  //   const getBasketTotal2 = (basket) =>
  //     basket?.reduce((amount, item) => amount + item.price, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value, anhemta) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procedd to Checkout</button>
    </div>
  );
}

export default Subtotal;
