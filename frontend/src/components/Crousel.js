import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setStickyNav } from "../redux/navbarSlices/navbarSlice";
import "../styles/Crousel.css";

const Crousel = ({ crousels }) => {
  const dispatch = useDispatch();
  const [ref, view] = useInView();
  const [currentCrousel, setCurrentCrousel] = useState(0);
  const length = crousels.length;

  const nextCrousel = () => {
    setCurrentCrousel(currentCrousel === length - 1 ? 0 : currentCrousel + 1);
  };
  const prevCrousel = () => {
    setCurrentCrousel(currentCrousel === 0 ? length - 1 : currentCrousel - 1);
  };

  useEffect(() => {
    if (view) {
      dispatch(setStickyNav(true));
    } else {
      dispatch(setStickyNav(false));
    }
  });

  return (
    <section className="section" ref={ref}>
      <div className="crousels">
        {crousels.map((crousel, index) => {
          return (
            <div
              className={
                index === currentCrousel ? "crousel active" : "crousel"
              }
              key={index}
            >
              <div href="#" className="crousel--items">
                <img
                  src={crousel.img}
                  alt="Crousel 1"
                  className="crousel--items__image"
                />
                <div className="crousel-text">
                  <h1 className="primary-heading">{crousel.title}</h1>
                  <p className="primary-description">{crousel.desc}</p>
                  <a
                    href={`/coursedetails/${crousel.link}`}
                    className="btn btn-white"
                  >
                    Learn About This Course
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="crousel">
          <div href="#" className="crousel--items">
            <img
              src="/images/crousel-2.jpg"
              alt="Crousel 1"
              className="crousel--items__image"
            />
            <div className="crousel-text">
              <h1 className="primary-heading">
                Give Sturecure to your Website with HTML
              </h1>
              <p className="primary-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi natus necessitatibus fugit accusamus doloribus.
              </p>
              <a href="/this" className="btn btn-white">
                Learn About This Course
              </a>
            </div>
          </div>
        </div>

        <div className="crousel">
          <div href="#" className="crousel--items">
            <img
              src="/images/crousel-3.jpg"
              alt="Crousel 1"
              className="crousel--items__image"
            />
            <div className="crousel-text">
              <h1 className="primary-heading">Design your website with CSS</h1>
              <p className="primary-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi natus necessitatibus fugit accusamus doloribus.
              </p>
              <a href="/this" className="btn btn-white">
                Learn About This Course
              </a>
            </div>
          </div>
        </div>

        <div className="crousel">
          <div href="#" className="crousel--items">
            <img
              src="/images/crousel-4.jpg"
              alt="Crousel 1"
              className="crousel--items__image"
            />
            <div className="crousel-text">
              <h1 className="primary-heading">
                Make Your Website Dynamic with Javascript
              </h1>
              <p className="primary-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi natus necessitatibus fugit accusamus doloribus.
              </p>
              <a href="/this" className="btn btn-white">
                Learn About This Course
              </a>
            </div>
          </div>
        </div>

        <div className="crousel">
          <div href="#" className="crousel--items">
            <img
              src="/images/crousel-5.jpg"
              alt="Crousel 1"
              className="crousel--items__image"
            />
            <div className="crousel-text">
              <h1 className="primary-heading">
                Call Your self Full Stack Developer with NodeJs
              </h1>
              <p className="primary-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi natus necessitatibus fugit accusamus doloribus.
              </p>
              <a href="/this" className="btn btn-white">
                Learn About This Course
              </a>
            </div>
          </div>
        </div> */}

        <div className="crousel-dots-container">
          {/* <!-- <span className="crousel--dot dot--active"></span><span className="crousel--dot"></span><spanclass="crousel--dot"></spanclass=> --> */}
        </div>

        <div className="crousel--left--btn" onClick={prevCrousel}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="crousel--right--btn" onClick={nextCrousel}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Crousel;
