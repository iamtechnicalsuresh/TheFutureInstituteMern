import React from "react";
import "../styles/Crousel.css";

const Crousel = () => {
  return (
    <section className="section onScrollNavFixed">
      <div className="crousels">
        <div className="crousel">
          <div href="#" className="crousel--items">
            <img
              src="/images/crousel-1.jpg"
              alt="Crousel 1"
              className="crousel--items__image"
            />
            <div className="crousel-text">
              <h1 className="primary-heading">
                Learn most demanding programing Language Python
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
        </div>

        <div className="crousel-dots-container">
          {/* <!-- <span className="crousel--dot dot--active"></span><span className="crousel--dot"></span><spanclass="crousel--dot"></spanclass=> --> */}
        </div>

        <div className="crousel--left--btn">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="crousel--right--btn">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Crousel;
