import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  fetchCourses,
  deleteCourse,
  clearError,
} from "../redux/coursesSlice/coursesSlice";

import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import "../styles/CourseActionPage.css";

const CourseActionPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses);
  const {
    loading,
    error,
    success,
    courses: { courses },
  } = course;

  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  if (user && user.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  const deleteHandler = (slug) => {
    dispatch(deleteCourse(slug));
  };

  const editHandler = (slug) => {
    history.push(`/admin/editcourses/${slug}`);
  };

  const addCouresHandler = () => {
    history.push("/admin/addcourses");
  };

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <div className="table-content">
        <div className="container">
          <h1 className="primary-heading">Courses</h1>
          <div className="add-icon" onClick={addCouresHandler}>
            <i className="far fa-plus-square"></i>
          </div>
          {loading && <Loader />}
          <table className="tables">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Month</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {courses &&
                courses.map((course) => (
                  <tr key={course._id}>
                    <td>{course.courseName}</td>
                    <td>{course.courseDuration} Month</td>
                    <td className="table-btn">
                      {course.coursePrice} <i className="fas fa-rupee-sign"></i>
                    </td>
                    <td>{course.createdAt.split("T")[0]}</td>
                    <td>
                      <i
                        className="fas fa-edit"
                        onClick={() => editHandler(course.courseSlug)}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteHandler(course.courseSlug)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseActionPage;
