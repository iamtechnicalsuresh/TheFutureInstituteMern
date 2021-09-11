import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchCourse } from "../redux/coursesSlice/coursesSlice";
import Loader from "../components/Loader";
import "../styles/CourseDetailPage.css";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses);
  const {
    loading,
    error,
    course: { course },
  } = courses;

  console.log(course && course);

  useEffect(() => {
    dispatch(fetchCourse(slug));
  }, [dispatch, slug]);

  return (
    <section className="section onScrollNavFixed">
      {loading && <Loader />}
      {error && toast(error)}
      {course && (
        <div className="container">
          <div className="grid grid-col-1">
            <div className="course-details">
              <h1 className="primary-heading">{course.courseName}</h1>
              <p className="secondary-description mb-2">
                {course.courseDescription}
              </p>
              <h2 className="secondary-heading mb-1">
                Course Duration:- {course.courseDuration} Month
              </h2>
              <h2 className="secondary-heading mb-1">
                Price:- {course.coursePrice} Rs
              </h2>
              <h2 className="secondary-heading">Course Topics</h2>
              <ul className="course-content">
                {course.courseTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseDetailPage;
