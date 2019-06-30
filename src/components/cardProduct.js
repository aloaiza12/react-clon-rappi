/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useAddMenuItem } from "../action-hooks";
import { Card } from "./ui";
import { id } from "postcss-selector-parser";

const name = {
  fontSize: "16px",
  color: "#333",
  fontWeight: "400",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  display: "block"
};

const description = {
  fontSize: "12px",
  color: "#9faab7",
  margin: "0",
  minHeight: "12px",
  textOverflow: "ellipsis",
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const separetor = {
  color: "#9faab7",
  display: "inline-block",
  verticalAlign: "top",
  fontSize: "5px",
  padding: "0 5px"
};

const info = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#333",
  textAlign: "right"
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  margin: "10px 5px",
  minWidth: "30%",
  "@media (max-width: 768px)": {
    minWidth: "100%"
  }
};

const card = {
  display: "flex",
  padding: "0",
  "@media (max-width: 768px)": {
    borderRadius: "0px",
    borderTop: "1px solid #e5edef",
    borderButtom: "1px solid #e5edef"
  }
};

const data = {
  padding: "10px"
};

const restaurantImg = {
  position: "relative",
  width: "124px"
};

const img = {
  height: "100%",
  width: "100%",
  position: "absolute",
  borderRadius: ".5em 0 0 .5em"
};

function CardProduct({ idRestaurant, product }) {
  const addMenuItem = useAddMenuItem();

  function handleClick(item) {
    addMenuItem(item);
  }

  return (
    <>
      <Link css={linkStyle} to="/cart">
        <Card css={card}>
          <div css={restaurantImg}>
            <img
              css={img}
              src="https://images.rappi.pe/restaurants_background/1839-1556640864.png?d=200x200&e=webp"
              alt="restaurant"
            />
          </div>
          <div css={data}>
            <span css={name}>{product.name}</span>
            <span css={description}>Desayuno - Internacional</span>
            <span css={info}>
              Envio S/. 6.65 <span css={separetor}>●</span> 50 min{" "}
            </span>
            <button
              css={{
                margin: "5px",
                padding: "5px",
                backgroundColor: "rgb(30, 198, 159)",
                border: "none",
                color: "white"
              }}
              onClick={() => handleClick(product)}
            >
              Add to cart!
            </button>
          </div>
        </Card>
      </Link>
    </>
  );
}

export default CardProduct;
