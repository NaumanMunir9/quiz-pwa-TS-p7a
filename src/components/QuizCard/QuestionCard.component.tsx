import React, { useState } from "react";
import "./QuestionCard.styles.scss";

export interface QuestionCardProps {
  option: string[];
  question: string;
  callback: (event: React.FormEvent<EventTarget>, userAnswer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  option,
  question,
  callback,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelection = (event: any) => setSelectedAnswer(event.target.value);

  return (
    <div className="questionCard-container">
      <div className="question">
        <h3>{question}</h3>
      </div>

      <div className="option">
        <form
          onSubmit={(event: React.FormEvent<EventTarget>) =>
            callback(event, selectedAnswer)
          }
        >
          <div className="mapped-options">
            {option.map((item, index) => {
              return (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={item}
                      required
                      checked={selectedAnswer === item}
                      onChange={handleSelection}
                    />
                    {item}
                  </label>
                </div>
              );
            })}
          </div>

          <input className="submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
