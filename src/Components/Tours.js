import React from "react";
import { tours } from "../data";
import Title from "./Title";

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subTitle="Tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, date, title, info, location, duration, cost } =
              tour;
            return (
              <article className="tour-card" id={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>from {cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;
