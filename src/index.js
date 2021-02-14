import React from "react";
import ReactDom from "react-dom";
import { petSupplies } from "./data/petSupplies";
import PetSupply  from "./PetSupply";
import "./style.css";

const PetSupplyList = () => (
  <section className="supplylist">
    {petSupplies.map((petSupply) => (
      <PetSupply key={petSupply.id} {...petSupply} />
    ))}
  </section>
);

ReactDom.render(<PetSupplyList />, document.getElementById("root"));
