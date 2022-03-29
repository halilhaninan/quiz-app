import React, { Fragment } from "react";

const showResult = ({ userPoint, prevAnswer, questionAnswer, scorePoint }) => {
  const questionPoint = () => {
    const checkIndex = (index) => {
      return prevAnswer[index] == questionAnswer[index].answer;
    };
    return prevAnswer.map((_, index) => (
      <Fragment>
        <h6 className="heading1">
          {index}.soru cevabiniz {checkIndex(index) ? "Doğru" : "Yanlış"}
        </h6>
      </Fragment>
    ));
  };
  console.log(prevAnswer.index);

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card p-3 mt-3">
        <h5 className="mt-3 mb-3">Performance score</h5>
        <div className="border p-2 rounded d-flex flex-row align-items-center">
          <div className="p-1 px-4 d-flex flex-column align-items-center score rounded">
            {" "}
            <span className="d-block char text-success">
              {scorePoint()}
            </span>{" "}
            <span className="text-success"></span>{" "}
          </div>
          <div className="ml-2 p-3">
            <h5 className="heading1">Your Score</h5>{" "}
            <span>{userPoint} puan</span>
            {questionPoint()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default showResult;
