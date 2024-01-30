import React, { useState } from "react";
import { CSS } from "../../assets/data";
import css from "../../assets/images/css.png";
import "./css.scss";

const Css = () => {
  const [id, setId] = useState("");

  return (
    <div className="css-container">
      <div className="heading-info">
        <div><img src={css} alt="css" width={"80px"} height={"80px"} /></div>
        <h3>Css Questions</h3>
      </div>
      <div >
        {CSS.map((item, index) => {
          return (
            <div className="border p-2 mt-1 rounded-2 ">
              <label className="question" onClick={() => setId(item.id)}>
                Q.{index + 1 + ")"} {item.question}
              </label>
              {id === item.id && (
                <div className="p-3 border-top">
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

export default Css;
