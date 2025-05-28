import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Course from "./components/courses.component";
import Login from "./components/login.component";
import Footer from "./components/footer.component";

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/learn-test" element={<Home />} /> {/* Make sure ExerciseList is rendered here */}
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
  
     

      // <section className="featured-courses">
      //   <h3>Featured Courses</h3>
      //   <div className="course-list1">
      //     {/* {
      //       courses && courses.map((course, index) => (
      //         <div className="course-card" key={index}>
      //           <img src={require(`../images/${course.image}`)} alt={course.name} />
      //           <h4>{course.name}</h4>
      //           <p>{course.description}</p>
      //           <br></br>
      //           <Link to={course.link} className="course-button">Enroll Now</Link>
      //           <Link to={course.link}><button class="cta-button1">Enroll Now</button></Link>

      //         </div>
      //       ))
      //     } */}
      //   </div>
      // </section>
  )};
   


export default App;
