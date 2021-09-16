import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursesCreatePage from "./pages/CoursesCreatePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import Dashboard from "./pages/Dashboard";
import CourseActionPage from "./pages/CourseActionPage";
import ContactActionPage from "./pages/ContactActionPage";
import UserActionPage from "./pages/UserActionPage";
import UserCreatePage from "./pages/UserCreatePage";
import UserEditPage from "./pages/UserEditPage";
import CoursesEditPage from "./pages/CourseEditPage";
import {
  setSearchBar,
  setAccountBar,
  setNavToggler,
  setProfileMenu,
} from "./redux/navbarSlices/navbarSlice";

const App = () => {
  const dispatch = useDispatch();
  const hideElements = () => {
    dispatch(setSearchBar(false));
    dispatch(setAccountBar(false));
    dispatch(setNavToggler(false));
    dispatch(setProfileMenu(false));
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <main onClick={hideElements}>
          <Route path="/" component={HomePage} exact />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/coursedetails/:slug" component={CourseDetailPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/addcourses" component={CoursesCreatePage} />
          <Route path="/admin/editcourses/:slug" component={CoursesEditPage} />
          <Route path="/admin/courseactionpage" component={CourseActionPage} />
          <Route
            path="/admin/contactactionpage"
            component={ContactActionPage}
          />
          <Route path="/admin/useractionpage" component={UserActionPage} />
          <Route path="/admin/adduser" component={UserCreatePage} />
          <Route path="/admin/edituser/:id" component={UserEditPage} />
        </main>
      </Switch>
      <ToastContainer position="top-center" />
      <Footer />
    </Router>
  );
};

export default App;
