import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function cards(props) {
    return (
      <div>
        <div
          className="container col-md-5 col-lg-3"
          style={{
            border: "3px solid",
            borderColor: "#72FFFF",
            borderRadius: "20px",
              backgroundColor: "#fff",
            width:"50%"
          }}
        >
          <div style={{margin:"10px"}}>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    );
}

export default cards;