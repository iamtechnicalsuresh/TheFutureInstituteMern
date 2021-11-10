import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setStickyNav } from "../redux/navbarSlices/navbarSlice";
import { fetchCourses } from "../redux/coursesSlice/coursesSlice";

import Card from "../components/Card";
import Loader from "../components/Loader";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses);
  const {
    courses: { courses },
    loading,
    error,
  } = course;

  dispatch(setStickyNav(true));

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {error && toast(error)}
      <section className="section onScrollNavFixed">
        <div className="container">
          <div className="section-title">
            <h1 className="primary-heading">Courses We Offer</h1>
          </div>
          <div className="grid grid-col-3">
            {courses &&
              courses.map((item) => (
                <Card
                  key={item._id}
                  image={item.courseCoverImage}
                  title={item.courseName}
                  description={item.courseDescription}
                  link={item.courseSlug}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
