import React, { useState } from "react";
import "./App.css";
import Question from "./compenent/Question";
import ShowResult from "./compenent/ShowResult";

//import Answer from "./Compenent/Answer";

function App() {
  const [numberQ, setNumberQ] = useState(0);
  const [userPoint, setUserPoint] = useState(0);
  const [prevAnswer, setPrevAnswer] = useState(["", "", "", ""]);
  const [canShowResult, setCanShowResult] = useState(false);

  const questionAnswer = [
    {
      question: "",
      answer: "1",
    },
    {
      question: "soru2",
      answer: "2",
    },
    {
      question: "soru3",
      answer: "3",
    },
    {
      question: "soru4",
      answer: "4",
    },
  ];

  const scorePoint = () => {
    if (userPoint == 100) {
      return "A";
    } else if (userPoint == 75) {
      return "B";
    } else if (userPoint == 50) {
      return "c";
    } else if (userPoint == 25) {
      return "D";
    }
    return "F";
  };

  // console.log("score point", scorePoint);

  const onKeyPress = (e) => {
    if (e.which === 13) {
      if (numberQ == 3) {
        setCanShowResult(true);
      }
      checkAnswer();
    }
  };

  const question4 = () => {
    return (
      prevAnswer.filter((element) => {
        return element.length;
      }).length == 4
    );
  };

  const nextquestion = () => {
    if (prevAnswer[numberQ].length != 0) {
      setNumberQ((prevState) => {
        if (prevState < questionAnswer.length - 1) {
          return prevState + 1;
        } else {
          return prevState;
        }
      });
    } else {
      alert("bos");
    }
  };
  console.log("prevanswer", prevAnswer);

  const Preview = () => {
    setNumberQ((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const changeHandler = (e) => {
    setPrevAnswer((prevState) => {
      const halilhan = [...prevState];

      halilhan[numberQ] = e.target.value;
      return [...halilhan];
    });
  };

  const checkAnswer = () => {
    if (prevAnswer[numberQ] == questionAnswer[numberQ].answer) {
      if (userPoint < 100) {
        setUserPoint((prev) => prev + 25);
      }
    }
    nextquestion();
  };

  const showResult = () => {
    if (numberQ == 3) {
      setCanShowResult(true);
    }
  };
  return (
    <>
      {canShowResult && (
        <ShowResult
          userPoint={userPoint}
          prevAnswer={prevAnswer}
          questionAnswer={questionAnswer}
          scorePoint={scorePoint}
        />
      )}
      {!canShowResult && (
        <Question
          questionAnswer={questionAnswer}
          numberQ={numberQ}
          onKeyPress={onKeyPress}
          prevAnswer={prevAnswer}
          changeHandler={changeHandler}
          Preview={Preview}
          checkAnswer={checkAnswer}
          showResult={showResult}
          question4={question4}
        />
      )}
    </>
  );
}

export default App;
