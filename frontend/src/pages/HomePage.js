import React from "react";
import Crousel from "../components/Crousel";
import Card from "../components/Card";
import homePageCourseData from "./homePageCourses";

const HomePage = () => {
  return (
    <main>
      <Crousel />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1 className="primary-heading">What We Teach Here!</h1>
          </div>
          <div className="grid grid-col-3">
            {homePageCourseData.map((item, i) => (
              <Card
                key={i}
                image={item.courseImage}
                title={item.courseName}
                description={item.courseDescription}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1 className="primary-heading">Our Trainers</h1>
          </div>
          <div className="grid grid-col-4">
            <div className="card">
              <img
                src="/images/SureshThapa.jpg"
                alt="Suresh Thapa"
                className="card__img-rounded"
              />
              <div className="card__details text-center">
                <h2 className="secondary-heading">Suresh Thapa</h2>
                <p className="secondary-description">
                  Full Stack Web Developer and Python Developer Trainer
                </p>
                <div className="social-icons">
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/AjitKumar.jpg"
                alt="Ajit Kumar"
                className="card__img-rounded"
              />
              <div className="card__details text-center">
                <h2 className="secondary-heading">Ajit Kumar</h2>
                <p className="secondary-description">
                  Python (Django, Flask) Trainer
                </p>
                <div className="social-icons">
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/RameshPandey.jpg"
                alt="Suresh Thapa"
                className="card__img-rounded"
              />
              <div className="card__details text-center">
                <h2 className="secondary-heading">Ramesh Pandey</h2>
                <p className="secondary-description">
                  Java Android App and C++ Developing Trainer
                </p>
                <div className="social-icons">
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/RekhaThapa.jpg"
                alt="Suresh Thapa"
                className="card__img-rounded"
              />
              <div className="card__details text-center">
                <h2 className="secondary-heading">Rekha Thapa</h2>
                <p className="secondary-description">Website Designer</p>
                <div className="social-icons">
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="/images/SubhamThapa.jpg"
                alt="Suresh Thapa"
                className="card__img-rounded"
              />
              <div className="card__details text-center">
                <h2 className="secondary-heading">Shubham Thapa</h2>
                <p className="secondary-description">Game Developer</p>
                <div className="social-icons">
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
