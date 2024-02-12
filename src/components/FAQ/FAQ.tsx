import React, { useState } from "react";
import CloseFAQ from "../../assets/icons/x.svg";
import OpenFAQ from "../../assets/icons/plus.svg";

import "./FAQ.css";

export default function FAQ() {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const questions = [
    { title: "Question 1", text: "Long answer to the first question" },
    { title: "Question 2", text: "Long answer to the second question" },
  ];

  const toggleQuestion = (index) => {
    setOpenedQuestion(openedQuestion === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__wrapper">
        <h2 className="faq__title">FAQ</h2>
        {questions.map((question, index) => (
          <div
            className={`faq__question ${
              openedQuestion === index ? "open" : ""
            }`}
            key={index}
          >
            <div className="faq__header" onClick={() => toggleQuestion(index)}>
              <h4 className="faq__question_title">{question.title}</h4>
              {openedQuestion === index ? (
                 <img src={CloseFAQ} alt="close-answer" />
              ) : (
                <img src={OpenFAQ} alt="open-answer" />
              )}
            </div>
            <div className="faq__answer">
              <p>{question.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
