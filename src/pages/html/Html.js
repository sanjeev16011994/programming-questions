import React, { useState } from "react";
import { HTML } from "../../assets/data";
import html from "../../assets/images/html.png";
import "./html.scss";

const Html = () => {
  const [id, setId] = useState("");

  return (
    <div className="css-container">
      <div className="heading-info">
        <img src={html} alt="css" width={"80px"} height={"80px"} />
        <h3>Html Questions</h3>
      </div>
      <div>
        {HTML.map((item, index) => {
          return (
            <div className="border p-2 mt-1 rounded-2">
              <label className="question" onClick={() => setId(item.id)}>
                Q.{index + 1 + ")"} {item.question}
              </label>
              {id === item.id && (
                <div className="p-3 border-top  ">
                  <span className="fw-bold" >Answer: </span>
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

export default Html;
