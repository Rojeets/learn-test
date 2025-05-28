import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Styles.css";

// import webDevelopmet from "../images/WD.jpeg";
// import mobileApp from "../images/MAD.jpeg";
// import dataScience from "../images/DS.jpeg";
// import machinelearning from "../images/ML.jpeg";

import courses from "../files/course.json";
courses = courses.slice(0, 3)



console.log(courses);

export default class Home extends Component {
    render() {
        return (
            <div className="uni">
                <section className="hero">
                    <h2>Learn Smarter with Personalized Learning Paths</h2>
                    <p>AI-driven courses tailored to your skills, pace, and preferences.</p>
                    <a href="login" className="get-button">Get Started</a>
                </section>

                <section className="featured-courses">
                    <h3>Featured Courses</h3>
                    <div className="course-list1">
                        {
                            courses && courses.map((course, index) => (
                                <div className="course-card" key={index}>
                                    <img src={require(`../images/${course.image}`)} alt={course.name} />
                                    <h4>{course.name}</h4>
                                    <p>{course.description}</p>
                                    <br></br>
                                    {/* <Link to={course.link} className="course-button">Enroll Now</Link> */}
                                    <Link to={course.link}><button class="cta-button1">Enroll Now</button></Link>

                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="how-it-works">
                    <h3>How It Works</h3>
                    <div className="steps">
                        <div className="step">
                            <h4>Step 1</h4>
                            <p>Create your profile.</p>
                        </div>
                        <div className="step">
                            <h4>Step 2</h4>
                            <p>Get personalized course recommendations.</p>
                        </div>
                        <div className="step">
                            <h4>Step 3</h4>
                            <p>Start learning and improve your skills.</p>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}