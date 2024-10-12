import React from "react";
import "./Information.css";

function Information() {
  return (
    <>
      <section class="add-card page">
        <form class="form">
          <label for="name" class="label">
            <span class="title">Ph Value</span>
            <input
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Ph Value"
            />
          </label>
          <label for="serialCardNumber" class="label">
            <span class="title">Turbudity Level</span>
            <input
              id="serialCardNumber"
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Turbudity Level"
            />
          </label>
          <div class="split">
            <label for="ExDate" class="label">
              <span class="title">TDS</span>
              <input
                id="ExDate"
                class="input-field"
                type="text"
                name="input-name"
                title="Expiry Date"
                placeholder="TDS"
              />
            </label>
            <label for="cvv" class="label">
              <span class="title">Temperature</span>
              <input
                id="cvv"
                class="input-field"
                type="text"
                name="cvv"
                title="CVV"
                placeholder="Temperature"
              />
            </label>
          </div>
          <input class="checkout-btn" type="button" value="Checkout" />
          <span style={{ color: "#fff" }}>Result: Good Or Bad</span>
        </form>
      </section>
    </>
  );
}

export default Information;
