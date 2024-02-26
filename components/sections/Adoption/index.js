import React from "react";
import { Button } from "../../elements/Button";
import { Rectangle } from "../../elements/Rectangle";

export const Adoption = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div id="adoption">
        <div className="wrapper">
          <div className="header-detail">
            <div className="tagline">
              <div className="tagline_start">{data.tagline_start}</div>
              <div className="tagline_end-adoption">{data.tagline_end}</div>
            </div>
            <div className="description">{data.description}</div>
            <div className="overview">
              <Button type="dark" name="Explore Now" />
              <Button type="light" name="View Intro" icon="fa fa-play play-icon" />
            </div>
          </div>
          <div className="header-image-adoption">
            <img src={data.image_url} alt="more friend & fun" />
          </div>
        </div>
      </div>
    </div>
  );
};
