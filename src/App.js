import { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import QuestionCard from"./QuestionCard";
import questions from "./data/questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const finishedQuiz = currentQuestionIndex === questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  }

  const submitAnswer = (value) => {
    setAnswers((prevState) => [...prevState, value]);
    goToNext();
  }

  return (
    <div>
      <CssBaseline/>
      <Box sx={{
        backgroundColor: lightBlue[500],
        height: "100vh", display: "flex", alignItems: "center"
      }} >
      <Container maxWidth="sm">
        {finishedQuiz ? null : <QuestionCard question=
        {currentQuestion} questionNumber={currentQuestionIndex + 1}
        submitAnswer={submitAnswer} />}
        
      </Container>
      <div>
        {JSON.stringify(answers)}
      </div>
      </Box>
    </div>
  );
}

export default App;
