import React from "react";
import { useHistory } from "react-router-dom";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" /> This contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Process to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
