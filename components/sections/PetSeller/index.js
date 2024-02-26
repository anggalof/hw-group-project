import React from "react";
import { Button } from "../../elements/Button";

export const PetSeller = () => {
  return (
    <div className="petsellers">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>Proud to be part of</h5>
            <h3>Pet Sellers</h3>
          </div>
          <Button type="light" name="View all" icon="fa fa-angle-right" wSize="nope" />
        </div>
        
        <div className="items">
          <img src="/images/pet-seller.svg" alt="pet-seller" />
        </div>
      </div>
    </div>
  );
};
