import React, { useState, useEffect } from "react";
import dataImages from "../../data/image.json";
import { StarRating } from "../../components/StarRating";
import { ImageCarousel } from "../../components/ImageCaraousel";

const App = () => {
  const [animalList, setAnimalList] = useState([]);
  const [resImages, setSearchImage] = useState([]);

  useEffect(() => {
    const arrData = dataImages.filter((i, idx) => idx < 12);
    setAnimalList(arrData);
    setSearchImage(arrData);
  }, []);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    
    const fetchData = dataImages.filter((item, idx) => item.title.includes(search) && idx < 12);
    setAnimalList(fetchData);
  };

  return (
    <React.Fragment>
      <div className="content-wrapper">
        <h2>HW GROUP TEST</h2>
        <h4>(Autocomplete, Photo Gallery, Image Carousel, Tooltip, Rating Widget / Star Rating).</h4>
      </div>
      <div className="form">
        <div className="form-search">
          <i className="fa fa-search"></i>
          <input
            type="text"
            name="search"
            onChange={handleChangeSearch}
            className="form-control form-input"
            placeholder="Search autocomplete..."
          />
        </div>
      </div>

      <div className="section">
        <div className="gallery">
          <h2>Gallery Photos</h2>
          {animalList && animalList.length > 0 ? (
            <div className="gallery-wrap gallery-grid">
              {animalList && animalList.map((data, index) => {
                return (
                  <div key={index}>
                    <img src={data.image_url} alt={data.title} />
                    <div className="gallery-detail">
                      <div className={`label ${data.is_featured ? 'label-blue' : 'label-red'}`}>
                        {data.is_featured ? "Available" : "Sold Out"}
                      </div>
                      <StarRating rating={data.rating} />
                    </div>
                    <div className="gallery-title">
                      {data.title}
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
      </div>
      <div className="section">
        <div className="caraousel">
          <h2>Image Caraousel</h2>
          <ImageCarousel data={resImages} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
