import React, { useState } from "react";
import { PYTHON } from "../../assets/data";
import python from "../../assets/images/python.png";

const Python = () => {
  const [id, setId] = useState("");

  return (
    <div className="css-container">
      <div className="heading-info">
        <img src={python} alt="css" width={"80px"} height={"80px"} />
        <h3>Python Questions</h3>
      </div>
      <div>
        {PYTHON.map((item, index) => {
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

export default Python;
