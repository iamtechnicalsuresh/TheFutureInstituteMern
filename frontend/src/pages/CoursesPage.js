import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/coursesSlice/coursesSlice";

import Loader from "../components/Loader";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses);
  const {
    courses: { courses },
    loading,
    error,
  } = course;
  console.log("error", error);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      <section className="section onScrollNavFixed">
        <div className="container">
          <div className="section-title">
            <h1 className="primary-heading">Courses We Offer</h1>
          </div>
          <div className="grid grid-col-3">
            <div className="card">
              <img
                src="/images/crousel-1.jpg"
                alt="Crousel 1"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  Learn C++ Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>

            <div className="card">
              <img
                src="/images/crousel-2.jpg"
                alt="Crousel 2"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  Python Complete Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>

            <div className="card">
              <img
                src="/images/crousel-3.jpg"
                alt="Crousel 3"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  HTML5 and CSS3 Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>

            <div className="card">
              <img
                src="/images/crousel-4.jpg"
                alt="Crousel 4"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  Javascript Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>

            <div className="card">
              <img
                src="/images/crousel-5.jpg"
                alt="Crousel 5"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  ExpressJs Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>

            <div className="card">
              <img
                src="/images/crousel-3.jpg"
                alt="Crousel 3"
                className="card__img"
              />
              <div className="card__details">
                <h2 className="secondary-heading">
                  ReactJs Begginer to Advance
                </h2>
                <p className="secondary-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil quidem deleniti est commodi, nam et assumenda eaque
                  dolorem aperiam.
                </p>
              </div>
              <a
                href="/course-details.html"
                className="btn btn-primary width-100"
              >
                More About This Course
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
