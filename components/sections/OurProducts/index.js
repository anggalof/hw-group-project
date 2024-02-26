import React from "react";
import { priceSplitter } from '../../../utils/formatter/currency';
import { Button } from "../../elements/Button";

export const OurProducts = (props) => {
  const { data } = props;
  return (
    <div className="ouritems">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>Hard to choose right products for your pets?</h5>
            <h3>Our Products</h3>
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
                      {item.name}
                    </div>
                    <div className="pet-info">
                      <div className="pet-info-wrap">
                        <span>Product:</span>
                        <span className="fill-info">{item.product_type}</span>
                      </div>
                      {item.size && (
                        <>
                          <div className="poin">
                            <span>&#x2022;</span>
                          </div>
                          <div className="pet-info-wrap">
                            <span>Size:</span>
                            <span className="fill-info">{item.size}</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="pet-price">
                      {priceSplitter(item.price)} VND
                    </div>
                    <div className="pet-gift">
                      <div className="pet-gift-wrap">
                        <img src="/images/gift.svg" alt="gift" />
                      </div>
                      <div className="poin">
                        <span>&#x2022;</span>
                      </div>
                      <div className="pet-gift-wrap">
                        Free Toy & Free Shaker
                      </div>
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
