import React, { useState } from "react";
import { JAVASCRIPT } from "../../assets/data";
import "./javascript.scss";
import js from "../../assets/images/js.png";

const Javascript = () => {
  const [id, setId] = useState("");

  return (
    <div className="css-container">
      <div className="heading-info">
        <img src={js} alt="css" width={"80px"} height={"80px"} />
        <h3>Javascript Questions</h3>
      </div>
      <div>
        {JAVASCRIPT.map((item, index) => {
          return (
            <div className="border p-2 mt-1 rounded-2  ">
              <label className="question" onClick={() => setId(item.id)}>
                Q.{index + 1 + ")"} {item.question}
              </label>
              {id === item.id && (
                <div className="p-3 border-top  ">
                  <span className="fw-bold">Answer: </span>
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Javascript;
