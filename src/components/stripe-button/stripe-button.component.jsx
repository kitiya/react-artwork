import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { setLocalCurrencyFormat } from "../../utils/formatter.utils";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // cent
  const publishableKey = "pk_test_UkrzggZFJevZwRuPrUqdE7jf00yidMCI7P";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="KatieArt Ltd."
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/svg/49/49365.svg"
      description={`Your total is ${setLocalCurrencyFormat(price)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
