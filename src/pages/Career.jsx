// src/pages/Career.jsx
import React from "react";
import courses from "../data/courses";

function Career() {
  return (
    <div className="row">
      {courses.career.map((course) => (
        <div className="col-md-4 mb-4" key={course.id}>
          <div className="card">
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text text-end">read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Career;
