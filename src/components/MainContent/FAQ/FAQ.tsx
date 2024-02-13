import { useState } from "react";
import { classNames } from "utils/class-names";
import { Collapse } from "shared-components/Collapse";
import OpenFAQ from "assets/icons/plus.svg";

import "./FAQ.css";

type FAQItemProps = {
  title: string;
  text: string;
};

function FAQItem({ title, text }: FAQItemProps) {
  const [isOpened, setIsOpened] = useState(title === "Question 1");
  const className = classNames({
    faq__question: true,
    faq__question_open: isOpened,
  });

  return (
    <div className={className}>
      <div className="faq__question_header" onClick={() => setIsOpened((v) => !v)}>
        <h4 className="faq__question_title">{title}</h4>
        <img src={OpenFAQ} alt="open-answer" />
      </div>
      <Collapse isOpened={isOpened}>
        <div className="faq__question_answer">
          <p>{text}</p>
        </div>
      </Collapse>
    </div>
  );
}

export function FAQ() {
  const questions = [
    { title: "Question 1", text: "Long answer to the first question" },
    { title: "Question 2", text: "Long answer to the second question" },
  ];

  return (
    <section className="faq">
      <div className="faq__wrapper">
        <h2 className="faq__title">FAQ</h2>
        {questions.map((question, index) => (
          <FAQItem
            key={question.title}
            title={question.title}
            text={question.text}
          />
        ))}
      </div>
    </section>
  );
}
