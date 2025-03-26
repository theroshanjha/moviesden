import React from "react";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
              className="tales d-block img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1741679102871_11thmarsocialnationfestivaldelhidesktop.jpg"
              className="tales d-block img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1740650947822_deewaarweb.jpg"
              className="tales d-block img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
