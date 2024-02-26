import React from "react";
import { Button } from "../../elements/Button";
import { RectangleTwo } from "../../elements/RectangleTwo";

export const SectionHeader = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div id="section-header">
        <div className="wrapper">
          <div className="header-image">
            <img src={data.image_url_next} alt="more friend & fun" />
          </div>
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
        </div>
        <RectangleTwo />
      </div>
    </div>
  );
};
