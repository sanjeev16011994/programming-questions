import React, { useState } from "react";
import { REACT } from "../../assets/data";
import reactImage from "../../assets/images/react.png";

const ReactQ = () => {
  const [id, setId] = useState("");

  return (
    <div className="css-container">
      <div className="heading-info">
        <img src={reactImage} alt="css" width={"80px"} height={"80px"} />
        <h3>ReactJs Questions</h3>
      </div>
      <div>
        {REACT.map((item, index) => {
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

export default ReactQ;
