import React from "react";
import { Button } from "../../elements/Button";
import { Rectangle } from "../../elements/Rectangle";

export const Header = (props) => {
  const { data } = props;
  return (
    <div id="header">
      <div className="container">
        <div className="wrapper">
          <div className="header-detail">
            <div className="tagline">
              <div className="tagline_start">{data.tagline_start}</div>
              <div className="tagline_end">{data.tagline_end}</div>
            </div>
            <div className="description">{data.description}</div>
            <div className="overview">
              <Button type="light" name="View Intro" icon="fa fa-play play-icon" />
              <Button type="dark" name="Explore Now" />
            </div>
          </div>
          <div className="header-image">
            <img src={data.image_url} alt="more friend & fun" />
          </div>
        </div>
      </div>

      <Rectangle />
    </div>
  );
};
