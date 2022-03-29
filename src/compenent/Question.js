import React from "react";

const Question = ({
  questionAnswer,
  numberQ,
  onKeyPress,
  prevAnswer,
  changeHandler,
  Preview,
  checkAnswer,
  showResult,
  question4,
}) => {
  return (
    <div className="App">
      <div className="questions">
        <p>{questionAnswer[numberQ].question}</p>

        <input
          placeholder="Your answer..."
          onKeyPress={onKeyPress}
          value={prevAnswer[numberQ]}
          onChange={changeHandler}
          className="input"
          type="text"
        />

        <div className="buttonWrapper">
          <button
            hidden={question4()}
            className="btn btn-secondary"
            onClick={Preview}
          >
            previous question
          </button>
          <button
            hidden={question4()}
            onClick={() => {
              checkAnswer();
            }}
            className="btn btn-info"
          >
            Next question
          </button>
          <button
            hidden={!question4()}
            onClick={showResult}
            type="submit"
            className="btn btn-primary"
          >
            Show result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
