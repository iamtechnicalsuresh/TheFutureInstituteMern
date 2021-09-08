import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursesCreatePage from "./pages/CoursesCreatePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/addcourses" component={CoursesCreatePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <ToastContainer position="top-center" />
      <Footer />
    </Router>
  );
};

export default App;
