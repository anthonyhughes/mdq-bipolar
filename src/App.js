import './App.css';
import {useState} from "react";
import Questionnaire from "./pages/Questionnaire";
import AllQuestionAnswersContext from "./contexts/AllQuestionAnswersContext"
import { ThemeProvider } from '@mui/material/styles';
import THEME from "./themes/MDQTheme"

function App() {
    const [allQuestionAnswers, setAllQuestionAnswers] = useState({});

    return (
        <ThemeProvider theme={THEME}>
            <AllQuestionAnswersContext.Provider value={{allQuestionAnswers, setAllQuestionAnswers}}>
                <Questionnaire/>
            </AllQuestionAnswersContext.Provider>
        </ThemeProvider>
    )
}

export default App;
