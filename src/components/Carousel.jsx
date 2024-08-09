import React from "react";

const Carousel = () => {
  return (
    <section className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "400px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://wallpapers.com/images/featured/islamic-pictures-6u5jgv6lgoa4gdgj.jpg"
              className="d-block w-100"
              alt="Kaba"
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9e26a35df2930001c476e3/1580137560606-Z6GZFSW4BYM67S8LANCE/Class+6a.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/817/597/small_2x/beautiful-islamic-mosque-landscape-crescent-moon-background-illustration-photo.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
