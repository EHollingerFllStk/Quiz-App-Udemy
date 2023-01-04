import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import QuestionCard from"./QuestionCard";

function App() {
  return (
    <div>
      <CssBaseline/>
      <Box sx={{
        backgroundColor: lightBlue[500],
        height: "100vh", display: "flex", alignItems: "center"
      }} >
      <Container maxWidth="sm">
        <QuestionCard question={{
          title: "Sample Question", 
          options: [
            {
              description: "Answer 1"
            },
            {
              description: "Answer 2"
            }
          ]
        }} questionNumber={1} />
      </Container>
      </Box>
    </div>
  );
}

export default App;
