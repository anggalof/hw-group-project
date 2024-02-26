import React from "react";
import { priceSplitter } from '../../../utils/formatter/currency';
import { Button } from "../../elements/Button";

export const OurPets = (props) => {
  const { data } = props;
  return (
    <div className="ouritems">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>Whats new?</h5>
            <h3>Take a look at some of our pets</h3>
          </div>
          <Button type="light" name="View More" icon="fa fa-angle-right" wSize="nope" />
        </div>
        
        <div className="items">
          {data && data.length > 0 ? (
            <div className="items-wrap items-grid">
              {data && data.map((item) => {
                return (
                  <div key={item.id} className="items-box">
                    <img src={item.image_url} alt={item.name} />
                    <div className="pet-title">
                      {item.code} - {item.name}
                    </div>
                    <div className="pet-info">
                      <div className="pet-info-wrap">
                        <span>Gene:</span>
                        <span className="fill-info">{item.gender}</span>
                      </div>
                      <div className="poin">
                        <span>&#x2022;</span>
                      </div>
                      <div className="pet-info-wrap">
                        <span>Age:</span>
                        <span className="fill-info">{item.age} months</span>
                      </div>
                    </div>
                    <div className="pet-price">
                      {priceSplitter(item.price)} VND
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="not-found">
              Data not found, please try again with key that right
            </div>
          )}
        </div>

        <Button type="light" name="View More" icon="fa fa-angle-right" wMobile="active" />
      </div>
    </div>
  );
};
