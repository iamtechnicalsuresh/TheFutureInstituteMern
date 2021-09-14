import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import Sidebar from "../components/Sidebar";

import {
  fetchCourse,
  clearError,
  clearSuccess,
} from "../redux/coursesSlice/coursesSlice";
import Loader from "../components/Loader";

const CoursesEditPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const history = useHistory();
  const courses = useSelector((state) => state.courses);
  const { error, success, loading, course } = courses;

  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  if (user && user.role !== "admin") {
    history.push("/");
  }

  const topicsTemplate = { newTopic: "" };

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseTopics, setCourseTopics] = useState([topicsTemplate]);
  const [courseDuration, setCourseDuration] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCoverImage, setCourseCoverImage] = useState("");

  useEffect(() => {
    dispatch(fetchCourse(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (course && course.course) {
      setCourseName(course.course.courseName);
      setCourseDescription(course.course.courseDescription);
      setCourseTopics(
        course.course.courseTopics.map((topic) => {
          return { newTopic: topic };
        })
      );
      setCourseDuration(course.course.courseDuration);
      setCoursePrice(course.course.coursePrice);
      setCourseCoverImage(course.course.courseCoverImage);
    }
    if (error) {
      toast(error);
      dispatch(clearError());
    } else if (success) {
      toast("Course Submit Successfully");
      dispatch(clearSuccess());
    }
  }, [course, dispatch, error, success]);

  const addTopicHandler = (e, index) => {
    const topicUpdate = courseTopics.map((item, i) =>
      index === i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    );
    setCourseTopics(topicUpdate);
  };

  const addTopics = (e) => {
    e.preventDefault();
    setCourseTopics([...courseTopics, topicsTemplate]);
  };

  const removeTopic = (e, index) => {
    e.preventDefault();
    const filterTopics = [...courseTopics];
    filterTopics.splice(index, 1);
    setCourseTopics(filterTopics);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   postCourse({
    //     courseName,
    //     courseDescription,
    //     courseTopics,
    //     courseDuration,
    //     coursePrice,
    //     courseCoverImage,
    //   })
    // );
  };

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <div>
        <section className="section">
          {loading && <Loader />}
          <div className="section-title">
            <h1 className="primary-heading">Add New Course</h1>
          </div>
          <div className="container">
            <form className="forms" onSubmit={submitHandler}>
              <div className="form-group">
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Course Description</label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="6"
                  className="form-textarea"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Course Topics</label>
                {courseTopics.map((item, index) => (
                  <div className="grid grid-col-2" key={index}>
                    <input
                      key={index}
                      type="text"
                      id={index}
                      name="newTopic"
                      placeholder="Topics"
                      className="form-input"
                      value={item.newTopic}
                      onChange={(e) => addTopicHandler(e, index)}
                    />
                    <button
                      className="btn btn-danger"
                      onClick={(e) => removeTopic(e, index)}
                      style={{ width: "10rem" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  className="btn btn-primary"
                  onClick={addTopics}
                  style={{ width: "15rem" }}
                >
                  Add More Items
                </button>
              </div>
              <div className="grid grid-col-2">
                <div className="form-group">
                  <label className="form-label">Course Duration</label>
                  <input
                    type="text"
                    className="form-input"
                    value={courseDuration}
                    onChange={(e) => setCourseDuration(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Course Price</label>
                  <input
                    type="text"
                    className="form-input"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Course Cover Image</label>
                <input
                  type="text"
                  className="form-input"
                  value={courseCoverImage}
                  onChange={(e) => setCourseCoverImage(e.target.value)}
                />
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesEditPage;
